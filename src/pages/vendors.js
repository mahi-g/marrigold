import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';
import FormInput from '../components/form-input';
import PlacesAutocomplete from "react-places-autocomplete";
import VendorCard from '../components/card/VendorCard';
import testImage from "../images/test.jpg";
import Button from '../components/button';

const StyledFormInput = styled(FormInput)`
  margin-left: 120px;
  margin-top: ${theme.size.large};
  @media ${theme.screenSize.upToMedium} {
    font-size: ${theme.fontSize.small};
    margin: auto;
    margin-top: ${theme.fontSize.xlarge};
    width: 250px;
  }
  @media ${theme.screenSize.upToXLarge} {
    margin-left: 80px;
  }
`

const Suggestions = styled.div`
  margin-left: 110px;
  padding-bottom: ${theme.size.small};
  width: 27.5vw;
  display: flex;
  align-items: center;
  @media ${theme.screenSize.upToMedium} {
    margin: auto;
    width: 67%;
  }
  @media ${theme.screenSize.upToXLarge} {
    margin-left: 8%;
    width: 84%;
  }
`;

const StyledVendorCard = styled(VendorCard)`
  margin: auto;
  margin-top: ${theme.size.xlarge};
`;

const CardContainer = styled.div`
  height: 90vh;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  @media ${theme.screenSize.upToMedium} {
    display: block;
  }
`;

const StyledButton = styled(Button)`
  margin-bottom: ${theme.size.xxlarge}; 
  margin-left: 45%; 
`;

const VendorSearch = () => {
  const [location, setLocation] = useState("");

  const handleSelect = location => {
    setLocation(location);
  };

  // dummy data for now
  const vendorsList = [
    {
      id:1,
      businessName: "Tahiya's Photography",
      location: "New York, NY",
      image: testImage,
      href: '/photographers/Tahiyas%20Photography',
      ratingValue: 4,
      priceRange: [200,500],
      totalRating: 30,
    },
    {
      id:2,
      businessName: "Tahiya's Photography",
      location: "New York, NY",
      image: testImage,
      href: '/photographers/Tahiyas%20Photography',
      ratingValue: 4,
      priceRange: [200,500],
      totalRating: 30,
    },
    {
      id:3,
      businessName: "Tahiya's Photography",
      location: "New York, NY",
      image: testImage,
      href: '/photographers/Tahiyas%20Photography',
      ratingValue: 4,
      priceRange: [200,500],
      totalRating: 30,
    },
    {
      id:4,
      businessName: "Tahiya's Photography",
      location: "New York, NY",
      image: testImage,
      href: '/photographers/Tahiyas%20Photography',
      ratingValue: 4,
      priceRange: [200,500],
      totalRating: 30,
    }
  ]
  // will add a line here to get the list of all available vendors by location from the database

  return (
      <>
        <PlacesAutocomplete
          value={location}
          onChange={setLocation}
          onSelect={handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div>
              <StyledFormInput 
                {...getInputProps({ placeholder: "Type location" })}
              />
                {suggestions.map(suggestion => {
                  const style = {
                    backgroundColor: suggestion.active ? theme.colorMap.cream : "#fff"
                  };

                  return (
                    <Suggestions {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </Suggestions>
                  );
                })}
            </div>
          )}
        </PlacesAutocomplete>
        {
          // once we have a list of vendors from the api, we will map through them here
          <CardContainer>
            <CardGrid>
              {
                vendorsList.map( item =>
                  <StyledVendorCard
                    key={item.id}
                    businessName={item.businessName}
                    location={item.location}
                    image={item.image}
                    href={item.href}
                    ratingValue={item.ratingValue}
                    priceRange={item.priceRange}
                    totalRating={item.totalRating}
                  />
                )
              }
            </CardGrid>
          </CardContainer>
        }
        {/* dummy button for now. will work once pagination component is ready*/}
        <StyledButton
          text={'Load More'}
          onClick={null}
          width={'120px'}
          height={'40px'}
        />

      </>
    )
};

export default VendorSearch;