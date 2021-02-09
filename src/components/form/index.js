import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme';
import FormCard from '../card/FormCard';

const Container = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    @media ${theme.screenSize.upToLarge} {
        width: 90%;
      }
`
const Button = styled.button`
    background: ${({background}) => background ? `${background}` : theme.colorMap.cream};
    border: 1px solid ${theme.colorMap.cream};
    border-radius: ${theme.size.small};
    width: 20%;
    margin-left: ${({marginLeft}) => marginLeft ? `${marginLeft}%` : `0%`};
    padding: 5px 8px;
    font-size: ${theme.fontSize.small};
    color: ${({color}) => color ? `${color}` : theme.colorMap.mustardYellow};

    &:hover{
        color: ${theme.colorMap.darkGrey};
        border: 1px solid ${theme.colorMap.darkGrey2};
    }
    &:focus{
        background: ${theme.colorMap.darkGrey2};
        color: ${theme.colorMap.cream};
        outline:none;
        border: 1px solid ${theme.colorMap.darkGrey2};
    }
    @media ${theme.screenSize.upToSmall} {
        font-size: ${theme.fontSize.xsmall};
    }
`

const InputGroup = styled.div`
    width: inherit;
    display: flex; 
    flex-direction: column;
    margin: ${theme.size.medium} 20%;
    @media ${theme.screenSize.upToLarge} {
        font-size: ${theme.fontSize.small};
        margin:  ${theme.size.small} auto;
    }
`

const Label = styled.label`
    font-weight: bold;
    font-size: ${theme.fontFamily.small};
    padding-left: ${theme.size.small};
    margin-bottom: ${theme.size.xsmall} 0;

    @media ${theme.screenSize.upToLarge} {
        font-size: ${theme.fontSize.tiny};
    }
`
const Input = styled.input`
    border: none;
    border-radius: ${theme.size.xsmall};
    height: 25px;
    width: 250px;
    padding: ${theme.size.small};
    margin: ${theme.size.xsmall} 0;

    @media ${theme.screenSize.upToLarge} {
        width: 85%;
        height: 20px;
    }
`
const Textarea = styled.textarea`
    border: none;
    border-radius: ${theme.size.xsmall};
    height: 80px;
    width: 250px;
    font-family: ${theme.fontFamily.body}, sans-serif;
    padding: ${theme.size.small};
    margin: ${theme.size.xsmall};

    @media ${theme.screenSize.upToLarge} {
        width: 85%;
        height: 80px;
        margin: ${theme.size.tiny};

    }
`

class MultiStepForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fields: this.props.fields,
            step: 1,
        }
        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleSubmission(e) {
        this.props.handleSubmit(e, this.state.fields);
        const resetValue = this.resetForm();
        this.setState({fields:resetValue, step:1});
    }

    resetForm(){
        let fields = JSON.parse(JSON.stringify(this.props.fields)); 
        fields.forEach(field => {
            field.forEach(input => {
                if(Array.isArray(input.value)){
                    input.value.forEach( (value,i) => input.value[i] = "");
                }
                else {
                    input.value = "";
                }
            })
        });

        return fields;
    }


    handleNext(){
        if(this.state.step < this.props.maxSteps) this.setState(prev => ({step: prev.step+1}))    
    }

    handlePrev(){
        if(this.state.step !== 1) this.setState(prev => ({step: prev.step-1}))  
    }

    handleOnChange(e){
        e.preventDefault();
        const { name, value, placeholder } = e.target;
        this.state.fields.forEach((form, i) => {
            form.forEach((field, j) => {
                if(field.name === name){
                    let updatedFields = this.state.fields;
                    if(field.placeholder.length > 1) {
                        const index = field.placeholder.findIndex((e)=> e === placeholder);
                        updatedFields[i][j].value[index] = value;
                    }
                    else { 
                        updatedFields[i][j].value = value; 
                    }
                    this.setState({ fields: updatedFields });
                }
            });
        });
    }

    render(){
        const body = this.state.fields && this.state.fields.map((field, i) => {
            if(this.state.step === i+1){
                return (
                    <FormGroup  
                        fields={field} 
                        handleOnChange={this.handleOnChange}
                        key={this.state.step}
                    />
                )}
        });

        const button =  this.props.maxSteps > 1 
            ?<Buttons 
                step={this.state.step} 
                maxSteps={this.props.maxSteps} 
                handlePrev={this.handlePrev} 
                handleNext={this.handleNext} 
                handleSubmit={this.handleSubmission}
            />
            : <Button marginLeft={'40'} onClick={this.handleSubmission}>{this.props.headerText}</Button>


        return(
            <FormCard
                header = {this.props.headerText}
                body= {body}                
                footer={button}
                maxHeight={'800'}
                height={'650'}
                maxWidth={'600'}
                width={'500'}
            />
        );
    }
    
}

const Buttons = ({step, maxSteps, ...props}) => {
    return(
        <>
            <Button onClick={props.handlePrev} disabled={!step===1}>prev</Button> 
            {step < maxSteps
                ? <Button marginLeft={'70'} onClick={props.handleNext}>next</Button>
                : <Button 
                    background={theme.colorMap.darkGrey2}
                    color={theme.colorMap.cream}
                    marginLeft={'65'} 
                    onClick={props.handleSubmit}
                    >submit
                </Button>
            }
        </>
    );
}


const FormGroup = ({fields, handleOnChange, ...props}) => {
    const values = fields.map(field => {
        const inputs = field.placeholder.map((placeholderText, i) => {
            
            if(field.inputType === 'textarea'){
                return (
                    <Textarea 
                        name={field.name} 
                        value={field.value} 
                        placeholder={placeholderText} 
                        type={field.type} 
                        onChange={(e) => handleOnChange(e, field.name)}
                    />
                );
            }
            return ( field.placeholder.length > 1 
                ?<Input 
                    name={field.name} 
                    value={field.value[i]} 
                    placeholder={placeholderText} 
                    type={field.type} 
                    onChange={(e) => handleOnChange(e, field.name)}
                />
                :<Input 
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
                <Label>{field.label}</Label>
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


export default MultiStepForm;