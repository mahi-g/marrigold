import React from 'react';
import Form from '../components/form';

const SignUp = () => {

    const handleSubmit = (formData) => {
        console.log('recieved', formData);
    }

    const fields = [
            [
                { name:'name', value: [''], placeholder: ['Business Name'], label: 'Name', type: 'text', required: true },
                { name: 'location',  value: ['',''], placeholder: ['City', 'State'], label: 'Location', type: 'text', required: true },
                { name:'about', value: [''], placeholder: ['About the business...'], label: 'About', type: 'text', inputType: 'textarea', required: true },

            ],
            [
                { name:'details', value: [''], placeholder: ['List specific details about the services provided'], label: 'Details', type: 'text', inputType: 'textarea', required: false },
                { name:'link', value:['',''],  placeholder: ['Instagram', 'Facebook'], label: 'Link Social Media', type: 'text', required: false }
            ],
            [
                { name:'contact', value:[''], placeholder: ['Phone Number'], label: 'Contact', type: 'text', required: true },
                { name:'images', value:['',''], placeholder: ['Images'], label: 'Upload Pictures', type: 'file', required: false }
            ]
    ];
    return(
        <Form 
            fields={fields} 
            maxSteps={3} 
            headerText={'Sign Up'} 
            handleSubmit={handleSubmit}
        />
    );
}

 export default SignUp;