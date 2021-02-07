import React from 'react';
import MultiStepForm from './MultiStepForm';

class Contact extends React.Component {
    constructor(props){
        super();
        this.state = {
            fields: 
                [
                    [
                        { name:'name', value: '', placeholder: ["Jane Smith"], label: "Full Name", type: "text" },
                        { name: 'email',  value: '', placeholder: ["janesmith@email.com"], label: "Email", type: "text" },
                        { name: 'date',  value: '', placeholder: ["mm/dd/yy"], label: "Wedding Date", type: "text" }
                    ],
                    [
                        { name:'guests', value:'', placeholder: ["Provide specific details about the services provided"], label: "Details", type: "text" },
                        { name:'location', value:[''],  placeholder: ["Where..."], label: "Location of Service", type: "text" }
                    ],
                    [
                        { name:'event-start-time', value:'', placeholder: ["8:00 am"], label: "Event Start Time", type: "text" },
                        { name:'event-end-time', value:'', placeholder: ["11:00 am"], label: "Event End Time", type: "text" }
                    ],
                    [
                        { name:'budget', value:'', placeholder: ["$$$"], label: "Estimated Budget", type: "text" },
                        { name:'event-end-time', value:'', placeholder: ["Show your vender what you're looking for"], label: "Pinterest Board (optional)", type: "text" }
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
                headerText={"Contact"} 
                maxSteps={4} 
                handleSubmit={this.handleSubmit} 
                handleOnChange={this.handleOnChange}
            />
        );
    }
    
}


export default Contact;