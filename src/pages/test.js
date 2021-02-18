import React from 'react';
import VendorCard from '../components/card/VendorCard';
import styled from '@emotion/styled';
import testImage from "../images/test.jpg";

const StyledVendorCard = styled(VendorCard)`
    margin-left: 100px;
`;

const Test = () => (
    //Testing the vendor card
    <StyledVendorCard
        businessName={"Tahiya's Photography"}
        location={"New York, NY"}
        image={testImage}
        href={'/photographer'}
        ratingValue={4}
        priceRange={[200,500]}
        totalRating={30}
    />
);

export default Test;
