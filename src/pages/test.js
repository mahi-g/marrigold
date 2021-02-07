import React from 'react';
import SignUp from '../components/form/SignUp';
import Contact from '../components/form/Contact';

import FormCard from '../components/card/FormCard';
import styled from '@emotion/styled';

const StyledCategoryCard = styled(FormCard)`
    margin-left: 100px;
`;

const Test = () => (
    //Testing the category card
    <>
        <SignUp/>
        <br/>
        <Contact />
    </>
);



export default Test;
