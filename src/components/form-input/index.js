import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme';

const INPUT_WIDTH = '380px';

const Input = styled.input`
    border: none;
    border-radius: ${theme.size.tiny};
    height: 18px;
    width: ${({width}) => width ? `${width}` : `${INPUT_WIDTH}`};
    padding: ${theme.size.small};
    margin: ${theme.size.xsmall};
    &:focus {
      outline: none;
      border: 1px solid ${theme.colorMap.mustardYellow};
      border-radius: ${theme.size.xsmall};
    };
    @media ${theme.screenSize.upToLarge} {
      width: 85%;
      height: 20px;
    };
`;

const FormInput = ({
    name,
    value,
    placeholder=null,
    type=null,
    pattern=null,
    onChange,
    width,
    ...props
}) => (
    <Input 
        name={name} 
        value={value} 
        placeholder={placeholder} 
        type={type} 
        pattern={pattern}
        onChange={onChange}
        {...props}
    />
);
export default FormInput;