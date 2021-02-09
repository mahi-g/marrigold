import React from 'react';
import MultiStepForm from '../components/form';

const SignIn = () => {

    const handleSubmit = (e, formData) => {
        e.preventDefault();
        console.log("Submitted");
        console.log("Recieved", formData);

    }

    const fields = [
            [
                { name:'email', value: '', placeholder: [""], label: "Email", type: "text" },
                { name: 'password',  value: [], placeholder: [""], label: "Password", type: "text" }
            ]
    ];
    return(
        <MultiStepForm fields={fields} maxSteps={1} headerText={"Sign In"} handleSubmit={handleSubmit}/>
    );
}



export default SignIn;
