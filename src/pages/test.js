import React from 'react';
import CategoryCard from '../components/card/CategoryCard';
import photographer from "../images/photographer.png";
import styled from '@emotion/styled';

const StyledCategoryCard = styled(CategoryCard)`
    margin-left: 100px;
`;

const Test = () => (
    //Testing the category card

    <StyledCategoryCard
        categoryName={'Photographer'}
        image={photographer}
        href={'/photographer'}
    />
);

export default Test;
