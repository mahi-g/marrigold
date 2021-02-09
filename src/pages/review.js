import React from 'react';
import MultiStepForm from '../components/form';

const Review = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
    }

    const fields = [
            [
                { name:'review', value: '', placeholder: ["Share your honest opinion"], label: "", type: "text", inputType: "textarea" },
            
                { name: 'hiredVendor',  value: ['',''], placeholder: ["Yes", "No"], label: "Did you hire this vendor for your wedding?", type: "radio" },
            
                { name:'name', value: '', placeholder: ["First name", "Last name"], label: "", type: "text"},
            
                { name:'email', value: '', placeholder: ["Email"], label: "", type: "text"},
            ]
    ];
    return(
        <MultiStepForm fields={fields} maxSteps={1} headerText={"Review"} handleSubmit={handleSubmit}/>
    );
}



export default Review;
