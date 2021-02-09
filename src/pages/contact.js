import React from 'react';
import MultiStepForm from '../components/form';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
    }

    const fields = [
        [
            { name:'name', value: '', placeholder: ["Jane Smith"], label: "Full Name", type: "text" },
            { name: 'email',  value: '', placeholder: ["janesmith@email.com"], label: "Email", type: "text" },
            { name: 'date',  value: '', placeholder: ["mm/dd/yy"], label: "Wedding Date", type: "text" }
        ],
        [
            { name:'guests', value:'', placeholder: ["Provide specific details about the services provided"], label: "Details", type: "text", inputType: "textarea"},
            { name:'location', value:[''],  placeholder: ["Where..."], label: "Location of Service", type: "text" }
        ],
        [
            { name:'event-start-time', value:'', placeholder: ["8:00 am"], label: "Event Start Time", type: "text" },
            { name:'event-end-time', value:'', placeholder: ["11:00 am"], label: "Event End Time", type: "text" }
        ],
        [
            { name:'budget', value:'', placeholder: ["$$$"], label: "Estimated Budget", type: "text" },
            { name:'pinterest', value:'', placeholder: ["Show your vender what you're looking for"], label: "Pinterest Board (optional)", type: "text" }
        ]
    ];

    return(
        <MultiStepForm fields={fields} maxSteps={4} headerText={"Contact"} handleSubmit={handleSubmit}/>
    );
}

export default Contact;