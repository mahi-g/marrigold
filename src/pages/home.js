/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css, keyframes  } from '@emotion/react';
import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';
import couple from "../images/wedding2.svg";
import string from "../images/flowerString.svg";
import girl from "../images/girlOnComputer2.svg";

const bounce = keyframes`
  0% to {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-40px);
  }
`

const Button = styled.button`
  width: 140px;
  height: 40px;
  padding: 1%;
  margin: 5% auto;
  font-size: ${theme.fontSize.tiny};
  text-transform: uppercase;
  letter-spacing: 2px;
  background: ${theme.colorMap.cream};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    background: ${theme.colorMap.darkGrey2};
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    color: ${theme.colorMap.white};
    transform: translateY(-5px);
  }
`

const Text = styled.div`
  width: 45vw;
  margin: auto;
  text-align: center;
  
  @media ${theme.screenSize.upToSmall} {
    font-size: ${theme.fontSize.tiny};
    width: 60%;
  }
`

const Header = styled.div`
  font-family: ${theme.fontFamily.header}, sans-serif;
  font-size: ${theme.fontSize.jumbo};

  @media screen and (max-width: 420px) {
    font-size: ${theme.fontSize.xlarge};
  }
`

const SectionOne = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 95vw;
  height: 75vh;
  margin: auto;
  background: ${theme.colorMap.mustardYellow};
`
const SectionTwo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  width: 100vw;
  height: 60vh;
  background: ${theme.colorMap.cream};

  @media screen and (max-width: 420px) {
    height: 70vh;
  }
`
const SectionThree = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 95vw;
  height: 60vh;
  background: ${theme.colorMap.mustardYellow};
  
`

const ImgCouple = styled.img`
  width: 45vw;
  height: auto;
  margin: auto;

  @media ${theme.screenSize.upToLarge} {
    width: 54%;
  }

  @media ${theme.screenSize.upToSmall} {
    width: 70%;
  }
`

const ImgGirl = styled.img`
  width: 25vw;
  height: auto;
  margin: auto;

  @media ${theme.screenSize.xlargeAndUp} {
    width: 50vh;
  }

  @media ${theme.screenSize.upToLarge} {
    width: 45%;
  }
  @media ${theme.screenSize.upToSmall} {
    width: 60%;
  }
`

const ImgString = styled.img`
  width: 20vw;
  height: auto;
  margin: auto;
  
  @media ${theme.screenSize.upToLarge} {
    width: 30vw;
  }
  @media ${theme.screenSize.upToSmall} {
    width: 40vw;
  }
  
`

const Img = ({alt, src, ...props}) => (
  <img 
    alt= {alt}
    src={src}
    css={css`
      margin: auto,
      width: 25vw,
      height: auto

      @media ${theme.screenSize.upToLarge} {
        width: 30vw;
      }
      @media ${theme.screenSize.upToSmall} {
        width: 50vw;
      }
    `}
    {...props}
  />
)


const Home = () => (
    <>
      <SectionOne>
        <Text css={css`animation: ${bounce} 1s ease-in-out 1`}>
          <Header>South Asian Wedding Planning</Header>
          <p>Finding the one was hard, planning your big day doesn’t have to be</p>
          <Button>Get Started</Button>
        </Text>
        <ImgCouple
          alt="Couple dancing together" 
          src={couple} 
        />
      </SectionOne>
      <SectionTwo >
        <ImgGirl
          alt="Girl on computer" 
          src={girl} 
        />
        <Text css={css`animation: ${bounce} 1s ease-in-out `}>
          <Header>Discover local vendors</Header>
          <p>Easily find and hire vendors providing wedding services near you!</p>
        </Text>
      </SectionTwo>
      <SectionThree>
        <Text css={css`animation: ${bounce} 1s ease-in-out `}>
          <Header>Sign up to be a vendor</Header>
          <p>Expand your reach and provide services to clients looking for vendors just like you!</p>
        </Text>
      
        <ImgString
          alt="Strings of flowers" 
          src={string} 
        />
    
        {/*
        
        <Img 
          alt="Strings of flowers" 
          src={string} 
          css= {css`
            width: 25vw;
            height: auto;
            margin: auto;
          `}
        />
        */}
        
      </SectionThree>
    </>
);

export default Home;
