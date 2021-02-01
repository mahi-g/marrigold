import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

const Container = styled.div`
  background: ${theme.colorMap.cream};
  border-radius:  ${theme.size.xmediumLarge};
  margin: 0 auto;
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
  max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
  height: ${({ width }) => width ? `${width}px` : 'auto'};
  width: ${({ width }) => width ? `${width}px` : 'auto'};
  @media ${theme.screenSize.upToLarge} {
    width: 80%;
  }
`;

const Header = styled.div`
  font-family: ${theme.fontFamily.formHeader}, sans-serif;
  font-size: ${theme.fontSize.medium};
  font-weight: bold;
  padding-top: ${theme.size.xmediumLarge};
  text-align: center;
  @media ${theme.screenSize.upToLarge} {
    font-size: ${theme.fontSize.small};
  }
`;

const FormCard = ({
    header,
    body,
    maxHeight,
    maxWidth,
    height,
    width,
}) => (
    <Container
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      height={height}
      width={width}
    >
      {header && <Header>{header}</Header>}
      {body && body}
    </Container>
);
export default FormCard;