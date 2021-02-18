import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../theme';
import { Rating } from "@material-ui/lab";

const NAME_FONT_SIZE = '16px';
const LEFT_PADDING = '30px';
const LOCATION_FONT_SIZE = '12px';
const COST_FONT_SIZE = '12px';
const IMAGE_HEIGHT = '130px';
const IMAGE_WIDTH = '230px';
const CONTAINER_HEIGHT = '170px';
const CONTAINER_WIDTH = '400px';
const HOVER_OFFESET = 5;

const Container = styled.div`
  background: ${theme.colorMap.cream};
  border-radius: ${theme.size.small};
  display: flex;
  height: ${CONTAINER_HEIGHT};
  width: ${CONTAINER_WIDTH};
    &:hover {
        cursor: pointer;
        transform: translate(0px, -${HOVER_OFFESET}px);
    }
  @media ${theme.screenSize.upToLarge} {
    display: block;
    width: 250px;
    height: 400px;
  }
`;

const Name = styled.div`
  color: ${theme.colorMap.darkGrey};
  font-family: ${theme.fontFamily.formHeader}, sans-serif;
  font-size: ${NAME_FONT_SIZE};
  font-weight: bold;
  padding-left: ${LEFT_PADDING};
  padding-right: ${theme.size.default};
  padding-top: ${theme.size.xmediumLarge};
  @media ${theme.screenSize.upToLarge} {
    padding-top: ${theme.size.small};
    font-size: ${theme.fontSize.small};
  }
`;

const Location = styled.div`
  color: ${theme.colorMap.lightGrey};
  font-family: ${theme.fontFamily.formHeader}, sans-serif;
  font-size: ${LOCATION_FONT_SIZE};
  padding-left: ${LEFT_PADDING};
  padding-top: ${theme.size.small};
  @media ${theme.screenSize.upToLarge} {
    font-size: ${theme.fontSize.xsmall};
  }
`;

const BusinessImage = styled.img`
  height: ${IMAGE_HEIGHT};
  padding-left: ${theme.size.mediumLarge};
  padding-top: ${theme.size.medium};
  width: ${IMAGE_WIDTH};
  @media ${theme.screenSize.upToLarge} {
    padding-bottom: ${theme.size.medium};
    width: 200px;
    height: 50%;
  }
`;

const LinkWrapper = styled.a`
  color: black;
  text-decoration: none;
`;

const StartingCost = styled.div`
  color: ${theme.colorMap.darkGrey};
  font-family: ${theme.fontFamily.formHeader}, sans-serif;
  font-size: ${COST_FONT_SIZE};
  font-weight: bold;
  padding-left: ${LEFT_PADDING};
  padding-top: ${theme.size.medium};
  @media ${theme.screenSize.upToLarge} {
    font-size: ${theme.fontSize.xsmall};
  }
`;

const StyledRating = styled(Rating)`
  padding-left: ${LEFT_PADDING};
  padding-top: ${theme.size.small};
  display: inline-block;
  padding-right: ${theme.size.xsmall};
`;

const TotalRating= styled.div`
  color: ${theme.colorMap.lightGrey};
  font-family: ${theme.fontFamily.formHeader}, sans-serif;
  font-size: ${theme.size.small};
  display: inline-block;
`;

const VendorCard = ({
    businessName,
    location,
    image,
    href,
    priceRange,
    reviewCount,
    ratingValue,
    totalRating,
    ...props
}) => (
      <LinkWrapper href={href}>
          <Container
              {...props}
          >
              <BusinessImage
                  alt={businessName}
                  src={image} 
              />
              <div>
                  <Name>{businessName}</Name>
                  <StyledRating
                    value={ratingValue}
                    max={5}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <TotalRating>({totalRating})</TotalRating>
                  <Location>{location}</Location>
                  {priceRange ? 
                      <StartingCost>Range: ${priceRange[0]} - ${priceRange[1]}</StartingCost> : 
                      <StartingCost>Range: N/A</StartingCost>
                  }
              </div>
          </Container>
      </LinkWrapper>
);
export default VendorCard;