/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css, keyframes  } from '@emotion/react';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';
import usePlacesAutocomplete from "use-places-autocomplete";
import FormInput from '../components/form-input';

const Text = styled.div`
  width: 45vw;
  margin: auto;
  text-align: center;
  
  @media ${theme.screenSize.upToSmall} {
    font-size: ${theme.fontSize.tiny};
    width: 60%;
  }
`

const StyledFormInput = styled.div`
  
  @media screen and (max-width: 420px) {
    font-size: ${theme.fontSize.xlarge};
  }
`

const VendorSearch = () => {
  
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete();

  const [location, setLocation] = useState('');

  return(
      <FormInput
        name="vendor-location-search" 
        value={location} 
        placeholder="Enter location"
        type="text"
        onChange={e => setLocation(e.target.value)}
      />
  )
};

export default VendorSearch;
