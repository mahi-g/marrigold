import React from 'react';
import Form from '../components/form';

const Contact = () => {

    const handleSubmit = (formData) => {
        console.log('Recieved', formData);
    }

    const fields = [
        [
            { name:'name', value: [''], placeholder: ['Jane Smith'], label: 'Full Name', type: 'text' },
            { name: 'email',  value: [''], placeholder: ['janesmith@email.com'], label: 'Email', type: 'text', required: true},
            { name: 'date',  value: [''], placeholder: ['mm/dd/yy'], label: 'Wedding Date', type: 'date', required: true }
        ],
        [
            { name:'details', value:[''], placeholder: ["Provide specific details about the services you're looking for"], label: 'Details', type: 'text', inputType: 'textarea'},
            { name:'location', value:[''],  placeholder: ['Where...'], label: 'Location of Service', type: 'text' }
        ],
        [
            { name:'event-start-time', value:[''], placeholder: ['8:00 am'], label: 'Event Start Time', type: 'text' },
            { name:'event-end-time', value:[''], placeholder: ['11:00 am'], label: 'Event End Time', type: 'text' }
        ],
        [
            { name:'budget', value:[''], placeholder: ['$-$$$'], label: 'Estimated Budget', type: 'text', required: true },
            { name:'pinterest', value:[''], placeholder: ["Show your vender what you're looking for"], label: 'Pinterest Board', type: 'text' }
        ]
    ];

    return (
        <Form 
            fields={fields} 
            maxSteps={4} 
            headerText={'Contact'} 
            handleSubmit={handleSubmit}
        />
    );
}

export default Contact;