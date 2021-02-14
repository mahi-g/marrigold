import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';

const NAME_FONT_SIZE = '25px';
const IMAGE_HEIGHT = '225px';
const IMAGE_WIDTH = '250px';
const CONTAINER_HEIGHT = '280px';
const CONTAINER_WIDTH = '280px';
const HOVER_OFFESET = 5;

const Container = styled.div`
  background: ${theme.colorMap.cream};
  border-radius: ${theme.size.xmediumLarge};
  height: ${CONTAINER_HEIGHT};
  width: ${CONTAINER_WIDTH};
    &:hover {
        cursor: pointer;
        transform: translate(0px, -${HOVER_OFFESET}px);
    }
  @media ${theme.screenSize.upToLarge} {
    width: 80%;
  }
`;

const CategoryImage = styled.img`
  height: ${IMAGE_HEIGHT};
  padding-left: ${theme.size.mediumLarge};
  width: ${IMAGE_WIDTH};
`;

const Name = styled.div`
    font-family: Roboto;
    font-style: italic;
    font-size: ${NAME_FONT_SIZE};
    text-align: center;
`;

const LinkWrapper = styled.a`
  color: black;
  text-decoration: none;
`;

const CategoryCard = ({
    categoryName,
    image,
    href,
    ...props
}) => (
    <LinkWrapper href={href}>
        <Container
            {...props}
        >
            <CategoryImage
            alt={categoryName}
            src={image} 
            />
            <Name>{categoryName}</Name>
        </Container>
    </LinkWrapper>
);
export default CategoryCard;