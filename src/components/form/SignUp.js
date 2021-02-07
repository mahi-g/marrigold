import React from 'react';
import MultiStepForm from './MultiStepForm';

class SignUp extends React.Component {
    constructor(props){
        super();
        this.state = {
            fields: 
                [
                    [
                        { name:'name', value: '', placeholder: ["Business Name"], label: "Name", type: "text" },
                        { name: 'location',  value: ['',''], placeholder: ["City", "State"], label: "Location", type: "text" }
                    ],
                    [
                        { name:'details', value:'', placeholder: ["Provide specific details about the services provided"], label: "Details", type: "text" },
                        { name:'link', value:['','',''],  placeholder: ["Instagram", "Facebook", "Other"], label: "Link Social Media", type: "text" }
                    ],
                    [
                        { name:'contact', value:'', placeholder: ["Phone Number"], label: "Contact", type: "text" },
                        { name:'images', value:[], placeholder: [], label: "Upload Pictures", type: "file" }
                    ]
                ],
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

    }
    //const [fields, setFields] = useState();
    handleSubmit(e){
        e.preventDefault();
        console.log("Submitted");
    }

    handleOnChange(e){
        e.preventDefault();
        const { name, value, placeholder } = e.target;
        this.state.fields.forEach((form, i) => {
            form.forEach((field, j) => {
                if(field.name === name){
                    let newObj = this.state.fields;
                    if(field.placeholder.length > 1) {
                        const index = field.placeholder.findIndex((e)=> e === placeholder);
                        newObj[i][j].value[index] = value;
                    }
                    else { newObj[i][j].value = value; }
                    this.setState({ fields: newObj });
                }
            });
        });
        
        
    }
    render(){
        return(
            <MultiStepForm 
                fields={this.state.fields} 
                maxSteps={3} 
                headerText={"Sign Up"} 
                handleSubmit={this.handleSubmit} 
                handleOnChange={this.handleOnChange}
            />
        );
    }
    
}

export default SignUp;