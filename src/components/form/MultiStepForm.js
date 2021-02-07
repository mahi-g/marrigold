import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme';
import FormCard from '../card/FormCard';

const Container = styled.div`
    width: 500px;
    height: 350px;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    @media ${theme.screenSize.upToLarge} {
        width: 80%;
      }
`
const InputGroup = styled.div`
    display: flex; 
    flex-direction: column;
    margin: ${theme.size.small} auto;
`

const Button = styled.button`
    background: ${theme.colorMap.cream};
    border: none;
    cursor: pointer;
    margin-left: ${({marginLeft}) => marginLeft ? `${marginLeft}%` : 0};
    font-weight: bold;
    color: ${theme.colorMap.mustardYellow};
`

const StyledCategoryCard = styled(FormCard)`
    margin-left: 100px;
`;



const MultiStepForm = ({fields, maxSteps, headerText, handleSubmit, handleOnChange}) => {
    const [step, setStep] = useState(1);
    
    const handleNext = () => {
        if(step < maxSteps) setStep(step+1)
    }
    const handlePrev = () => {
        if(step !== 1) setStep(step-1)
    }

    return(
        <StyledCategoryCard
            header = {<div>{headerText}</div>}
            body={
                step === 1
                ?<Step1 fields={fields[0]} handleOnChange={handleOnChange}/>
                :step === 2
                ?<Step2 fields={fields[1]} handleOnChange={handleOnChange}/> 
                :<Step3 fields={fields[2]} handleOnChange={handleOnChange}/>
            }                
            footer={<Buttons step={step} handlePrev={handlePrev} handleNext={handleNext} handleSubmit={handleSubmit}/>}
            maxHeight={'500'}
            maxWidth={'500'}
            width={'500'}
        />
        
    )

}


const Buttons = ({step, ...props}) => {
    console.log(step);
    return(
        <>
            {step > 1 && <Button onClick={props.handlePrev}>prev</Button> }
            {step < 3 
                ? <Button marginLeft={'80'} onClick={props.handleNext}>next</Button>
                : <Button marginLeft={'80'} onClick={props.handleSubmit}>submit</Button>
            }

        </>
    );
}


const MSForm = ({fields, handleOnChange, ...props}) => {
    const values = fields.map(field => {
        console.log(field.placeholder.length);
        const inputs = field.placeholder.map((placeholderText, i) => {
            return ( field.placeholder.length > 1 
                ?<input 
                    name={field.name} 
                    value={field.value[i]} 
                    placeholder={placeholderText} 
                    type={field.type} 
                    onChange={(e) => handleOnChange(e, field.name)}
                />
                :<input 
                    name={field.name} 
                    value={field.value} 
                    placeholder={placeholderText} 
                    type={field.type} 
                    onChange={(e) => handleOnChange(e, field.name)}
                />
            );
        });
        return (
            <InputGroup>
                <label>{field.label}</label>
                {inputs}
            </InputGroup>
        );
    });
    return(
        <Container>
            {values}
        </Container>
    )

}

const Step1 = (props) => {
    return(
        <MSForm {...props} />
    );
}

const Step2 = (props) => {
    return(
        <MSForm {...props} />
    );
}

const Step3 = (props) => {
    return(
        <MSForm {...props} />
    );
}


export default MultiStepForm;