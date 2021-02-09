import React from 'react';
import MultiStepForm from '../components/form';

const SignUp = () => {

    const handleSubmit = (e, formData) => {
        e.preventDefault();
        console.log("recieved", formData);
    }

    const fields = [
            [
                { name:'name', value: '', placeholder: ["Business Name"], label: "Name", type: "text" },
                { name: 'location',  value: ['',''], placeholder: ["City", "State"], label: "Location", type: "text" }
            ],
            [
                { name:'details', value:'', placeholder: ["Provide specific details about the services provided"], label: "Details", type: "text", inputType: "textarea"},
                { name:'link', value:['','',''],  placeholder: ["Instagram", "Facebook", "Other"], label: "Link Social Media", type: "text" }
            ],
            [
                { name:'contact', value:'', placeholder: ["Phone Number"], label: "Contact", type: "text" },
                { name:'images', value:[], placeholder: [], label: "Upload Pictures", type: "file" }
            ]
    ];
    return(
        <MultiStepForm fields={fields} maxSteps={3} headerText={"Sign Up"} handleSubmit={handleSubmit}/>
    );
}

 export default SignUp;