import React from 'react';
import Form from '../components/form';

const Review = () => {

    const handleSubmit = (fields) => {
        console.log("Submitted");
        console.log(fields);
    }

    const fields = [
            [
                { name:'rating', value: [''], placeholder: [''], label: 'Your Rating', type: 'text', inputType: "rating", required: true },

                { name:'review', value: [''], placeholder: ['Share your honest opinion'], label: '', type: 'text', inputType: 'textarea' },
            
                { name: 'hiredVendor',  value: [''], placeholder: [''], radiolabel: ['Yes','No'], label: 'Did you hire this vendor for your wedding?', type: "radio", required: true },

                { name:'name', value: ['',''], placeholder: ['Jane', 'Smith'], label: 'Name', type: 'text' },
            
                { name:'email', value: [''], placeholder: ['janesmith@email.com'], label: 'Email', type: 'text', required: true },

            ]
    ];
    return(
        <Form 
            fields={fields} 
            maxSteps={1} 
            headerText={'Review'} 
            handleSubmit={handleSubmit}
        />
    );
}



export default Review;
