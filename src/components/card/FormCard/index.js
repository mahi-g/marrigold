import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

const Container = styled.div`
  background: ${theme.colorMap.cream};
  border-radius:  ${theme.size.small};
  margin: 12px auto;
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
  max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
  height: ${({ height }) => height ? `${height}px` : 'auto'};
  width: ${({ width }) => width ? `${width}px` : 'auto'};
  @media ${theme.screenSize.upToLarge} {
    width: 80%;
  }
`
const Header = styled.div`
  font-family: ${theme.fontFamily.formHeader}, sans-serif;
  font-size: ${theme.fontSize.medium};
  font-weight: bold;
  border-bottom: 1px solid ${theme.colorMap.mustardYellow};
  padding: ${theme.size.medium} 0;
  text-align: center;
  & > div {
    font-size: ${theme.fontSize.xsmall};
    font-weight: 300;
    padding-top: ${theme.size.xsmall}
  }
  @media ${theme.screenSize.upToLarge} {
    font-size: ${theme.fontSize.small};
  }
`
const Footer = styled.div`
  display: flex;
  justify-contant: space-between;
  color: ${theme.colorMap.mustardYellow};
  border-top: 1px solid ${theme.colorMap.mustardYellow};
  margin: ${theme.size.small} 0;
  padding: ${theme.size.small};
`

const FormCard = ({
    header,
    subtitle,
    body,
    footer,
    maxHeight,
    maxWidth,
    height,
    width,
    ...props
}) => (
    <Container
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      height={height}
      width={width}
      {...props}
    >
      {header && 
      <Header>
        {header}
        { subtitle && <div>{subtitle}</div> }
      </Header>}
      {body && body}
      {footer&&<Footer>{footer}</Footer>}
    </Container>
);
export default FormCard;