import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../theme';

import couple from "../images/wedding.svg";
import string from "../images/flowerString.svg";
import girl from "../images/girlOnComputer.svg";




const Button = styled.button`
  width: 140px;
  height: 40px;
  padding: 1%;
  margin: 10% auto;
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

// const Body = styled.div`
//   width: 95vw;
//   height: 100vh;
//   min-height: 100%;
//   font-family: 'Raleway', sans-serif;
//   color: #333333
//   margin: auto;
//   overflow-x: visible;
// `

const Header = styled.div`
  font-family: ${theme.fontFamily.header}, sans-serif;
  font-size: ${theme.fontSize.jumbo};
  text-align: center;
`
//30px


const SectionOne = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100vw;
  height: 75vh;
`
const SectionTwo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100vw;
  height: 50vh;
  background: ${theme.colorMap.cream};;
`
const SectionThree = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50vh;
  background: ${theme.colorMap.mustardYellow};;
`
const Text = styled.div`
  text-align: center;
  margin:  auto;
  width: 40vw;
`

const x = {
  height: '50vh',
  width: '40vh',
  margin: 'auto',
}
const y = {
  height: '40vw',
  width: '40vw',
  margin: 'auto',
}
// height: '40vh',
// width: '40vh'

const Home = () => (
    <>
      <SectionOne>
        <Text>
          <Header>South Asian Wedding Planning</Header>
          <p>Finding the one was hard, planning your big day doesn’t have to be</p>
          <Button>Get Started</Button>
        </Text>
        <img alt="Couple dancing in Indian clothes" style={y} src={couple}/>
      </SectionOne>
      <SectionTwo>
        <img alt="Girl on computer" style={x} src={girl}/>
        <Text>
          <Header>Discover local vendors</Header>
          <p>Easily find and hire vendors providing wedding services near you!</p>
        </Text>
      </SectionTwo>
      <SectionThree>
        <img alt="Strings of flowers" style={x} src={string}/>
        <Text>
          <Header>Sign up to be a vendor</Header>
          <p>Expand your reach and provide services to clients looking for vendors just like you!</p>
        </Text>
      </SectionThree>
    </>
);

export default Home;
