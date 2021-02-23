import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme';
import UploadImage from '../images';
import FormCard from '../card/FormCard';
import { Rating } from '@material-ui/lab';
import WarningIcon from '@material-ui/icons/Warning';

const INPUT_WIDTH = '380px';
const CONTAINER_WIDTH = '400px';
const CONTAINER_HEIGHT = '480px';

const Container = styled.div`
    width: ${CONTAINER_WIDTH};
    height: ${CONTAINER_HEIGHT};
    display: flex;
    flex-direction: column;
    margin: 20px auto;

    @media ${theme.screenSize.upToLarge} {
        width: 90%;
        margin: 0 auto;
        height: 80%;
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
    & > div {
        display: flex;
        justify-content: space-between;
    }
    
    @media ${theme.screenSize.upToLarge} {
        font-size: ${theme.fontSize.small};
        margin:  ${theme.size.tiny} auto;
        width: 85%;
    }
`
const Label = styled.label`
    font-weight: bold;
    font-size: ${theme.fontSize.tiny};
    margin-top: ${theme.size.small};
    padding-left: ${theme.size.small};

    @media ${theme.screenSize.upToLarge} {
        margin-top: ${theme.size.xsmall};
        font-size: ${theme.fontSize.tiny};
    }
`
const Input = styled.input`
    border: none;
    border-radius: ${theme.size.tiny};
    height: 25px;
    width: ${INPUT_WIDTH};
    padding: ${theme.size.small};
    margin: ${theme.size.xsmall};

    &:focus {
        outline: none;
        border: 1px solid ${theme.colorMap.mustardYellow};
        border-radius: ${theme.size.xsmall};
    }
    @media ${theme.screenSize.upToLarge} {
        width: 85%;
        height: 20px;
    }
`
const Textarea = styled.textarea`
    border: none;
    border-radius: ${theme.size.xsmall};
    height: 80px;
    width: ${INPUT_WIDTH};
    font-family: Arial;
    padding: ${theme.size.small};
    margin: ${theme.size.xsmall};

    &:focus{
        outline: none;
        border: 1px solid ${theme.colorMap.mustardYellow};
        border-radius: ${theme.size.xsmall};
    }
    @media ${theme.screenSize.upToLarge} {
        width: 85%;
    }
`
const StyledRating = styled(Rating)`
    margin-left: ${theme.size.xsmall};
`

const Error = styled.div`
    display: flex;
    font-size: ${theme.fontSize.tiny};
    color: ${theme.colorMap.red};
    background: rgb(214, 69, 49, 0.3);
    padding: ${theme.size.small};
    margin: ${theme.size.xsmall} auto;
    width: ${INPUT_WIDTH};

    & > div {
        margin: 0 2px; 
        padding-top: 4px;
        width: 100%;
    }
    @media ${theme.screenSize.upToLarge} {
        margin-right: ${theme.size.large};
        width: 90%;
    }
    @media ${theme.screenSize.upToSmall} {
        margin-right: 2px;
        width: 90%;
    }
    
`
class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fields: this.props.fields,
            step: 1,
            rating: 1,
            radioValue: {},
            error: {}
        }
        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleRating = this.handleRating.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }
  
    //send data back and reset state 
    handleSubmission() {
        const { fields, step, error } = this.state;
        const err = this.handleError(step);
        if(err){
            error[step] = "One or more fields are incomplete";
            this.setState({error});
        }
        else{
            this.props.handleSubmit(fields);
            this.resetForm();
            error[step] = "";
        }
    }

    //reset value fields in the inputs to empty string or array after submission
    resetForm(){
        //make deep copy of the current fields
        let fields = JSON.parse(JSON.stringify(this.state.fields));
        fields.forEach(field => {
            field.forEach(input => {
                input.value.forEach( (value,i) => input.value[i] = "");
            });
        });
        this.setState(({
            fields,
            step:1, 
            radioValue:{},
            error: {},
            rating: 1
        }));
    }

    //Change/Update value field 
    handleOnChange(e){
        const { name, value, placeholder } = e.target;
        let index = this.state.step-1;
        let updatedFields = [...this.state.fields];

        updatedFields[index].forEach( field => {
            if(field.type === 'radio' && field.name === name){
                field.value[0] = value;
                let { radioValue } = this.state;
                radioValue[name] = value;
                this.setState({fields: updatedFields, radioValue});
            }
            if(field.name === name){
                let valueIndex = field.placeholder.findIndex((e)=> e === placeholder);
                field.value[valueIndex] = value;
                this.setState({ fields: updatedFields });
            }
        });
    }

    handleRating(e , value, name){
        e.preventDefault();
        let index = this.state.step-1;
        let updatedFields = [...this.state.fields];
        updatedFields[index].forEach(input => {
            if(input.name === name){
                input.value[0] = value; 
            }
        });
        this.setState({fields: updatedFields, rating: value});
    }
   
    //checks for empty value fields for required inputs
    //sets error if required fields is found
    //if no error is found, updates steps and renders next step of the form
    handleNext(){
        let { step, error } = this.state;
        const { maxSteps } = this.props;

        if(step < maxSteps) {
            let err = this.handleError(step);
            if(err){
                error[step] = "One or more fields are incomplete";
                this.setState({error});
            }
            else{
                error[step] = "";
                this.setState(prev => ({error, step: prev.step+1}));   
            }
        }

    }

    handlePrev(){
        if(this.state.step !== 1) this.setState(prev => ({step: prev.step-1}))  
    }

    //checks if a required field has an empty value
    handleError(index){
        let err = false;
        this.state.fields[index-1].forEach(field => {
            if(field.required){
                field.value.forEach(value => {
                    if(!value) err = true 
                });
            }
        }); 
        return err;
    }

    render(){
        const { fields, step, radioValue, rating, error} = this.state;
        const { maxSteps, headerText } = this.props;

        //Renders field groups from fields based on step value
        const body = fields && fields.map((fieldGroup, i) => {
            if(step === i+1){
                return (
                    <FormGroup  
                        fieldGroup={fieldGroup} 
                        radioValue = {radioValue}
                        rating = {rating}
                        error = {error[step]}
                        handleOnChange={this.handleOnChange}
                        handleRating = {this.handleRating}
                    />
                )}
        });

        //renders button component if multistep form or a single button for single page form
        const button =  (
                maxSteps > 1 
                ?<Buttons 
                    step={step} 
                    maxSteps={maxSteps} 
                    handlePrev={this.handlePrev} 
                    handleNext={this.handleNext} 
                    handleSubmit={this.handleSubmission}
                />
                :<Button 
                    marginLeft={'40'} 
                    onClick={this.handleSubmission}
                    >{headerText}
                </Button>
        );

        return(
            <FormCard
                header = {headerText}
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

const FormGroup = ({ fieldGroup, radioValue, rating, error, handleRating, handleOnChange }) => {
    const values = fieldGroup.map(field => {
        const inputs = field.placeholder.map((placeholderText, i) => {
            if(field.inputType === 'textarea'){
                return (
                    <Textarea 
                        name={field.name} 
                        value={field.value} 
                        placeholder={placeholderText} 
                        type={field.type} 
                        onChange={handleOnChange}
                    />
                );
            }
            else if(field.inputType === 'rating'){
                return (
                    <StyledRating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                            handleRating(event, newValue, field.name);
                        }}
                    />
                );
            }
            else if(field.type === 'radio'){
                return (
                    <RadioButton 
                        field={field} 
                        handleOnChange={handleOnChange}
                        radioValue = {radioValue}
                    />
                );
            }
            else if (field.type === 'file') {
                return <UploadImage />
            }

            else { 
                return ( 
                    <Input 
                        name={field.name} 
                        value={field.value[i]} 
                        placeholder={placeholderText} 
                        type={field.type} 
                        onChange={handleOnChange}
                    />
                );
            }
        });

        return (
            <InputGroup>
                <Label>{field.label} {field.required && <>*</>}</Label>
                <div>{inputs}</div>
            </InputGroup>
        );
    });
    
    return(
        <Container>
            {values}
            <InputGroup>
                { 
                    error && <div> 
                        <Error>
                            <WarningIcon fontSize="small" margin="12px"/>
                            <div>{error}</div>
                        </Error> 
                    </div>
                }
            </InputGroup>
        </Container>
    )

}

//determines footer buttons based on maxSteps
const Buttons = ({step, maxSteps, ...props}) => {
    return(
        <>
            <Button 
                onClick={props.handlePrev} 
                disabled={!step===1}
                >prev
            </Button> 

            { step < maxSteps
                ?<Button 
                    marginLeft={'70'} 
                    onClick={props.handleNext}
                    >next
                </Button>
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

//creates radio buttons for inputs with type radio
const RadioButton = ({field, radioValue, handleOnChange}) => {
    const input = field.radiolabel.map(value => {
        return (
            <div>
                <input 
                    type="radio" 
                    id={field.name} 
                    name={field.name} 
                    value={value} 
                    checked={radioValue[field.name] === value} 
                    onChange={handleOnChange}
                />
                <Label htmlFor={field.name}>{value}</Label>
            </div>
        );
    })

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', width:'50%', margin: '2px 5px'}}>
            {input}
        </div>
    );
}

export default Form;