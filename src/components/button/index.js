import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../theme';

const StyledButton = styled.button`
    background: ${({background}) => background ? `${background}` : theme.colorMap.cream};
    border: 1px solid ${theme.colorMap.cream};
    border-radius: ${theme.size.small};
    width: ${({width}) => width ? `${width}` : `20%`};
    height: ${({height}) => height ? `${height}` : `20%`};
    margin-left: ${({marginLeft}) => marginLeft ? `${marginLeft}%` : `0%`};
    padding: 5px 8px;
    font-size: ${theme.fontSize.small};
    color: ${({color}) => color ? `${color}` : theme.colorMap.mustardYellow};

    &:hover{
        color: ${theme.colorMap.darkGrey};
        border: 1px solid ${theme.colorMap.darkGrey2};
    }
    &:focus{
        background: ${theme.colorMap.darkGrey2};
        color: ${theme.colorMap.cream};
        outline:none;
        border: 1px solid ${theme.colorMap.darkGrey2};
    }
    @media ${theme.screenSize.upToSmall} {
        font-size: ${theme.fontSize.xsmall};
    }
`

const Button = ({
    onClick=null,
    to=null,
    height,
    width,
    ...props
}) => (
    <StyledButton 
        onClick={onClick}
        height={height}
        width={width}
        {...props}
    />
);
export default Button;

