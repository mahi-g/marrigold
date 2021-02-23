import React from 'react';
import Form from '../components/form';

const SignIn = () => {

    const handleSubmit = (formData) => {
        console.log("Recieved", formData);

    }

    const fields = [
            [
                { name:'email', value: [''], placeholder: [''], label: 'Email', type: 'text', required: true},
                { name: 'password',  value: [''], placeholder: [''], label: "Password", type: 'password', required: true }
            ]
    ];
    return(
        <Form 
            fields={fields} 
            maxSteps={1} 
            headerText={'Sign In'} 
            handleSubmit={handleSubmit}
        />
    );
}



export default SignIn;
