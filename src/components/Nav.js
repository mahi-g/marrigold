import React from 'react'
import styled from '@emotion/styled'
import { theme } from '../theme'
import marigold from "../images/marigold.png";

const Logo = styled.a`
    display: flex;
    text-decoration: none;
`
const LogoText = styled.div`
    color: black;
    font-family: ${theme.fontFamily.logo}, sans-serif;
    font-size: ${theme.fontSize.large};
    padding-top: ${theme.fontSize.tiny};
    text-align: left;
`

const LogoImg = styled.img`
    width: 2.5vw;
    height: auto;
    margin: auto;
    padding-top: ${theme.fontSize.tiny};
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 35%;
    @media ${theme.screenSize.upToSmall} {
        width: 70%;
    }
`
const Li = styled.li`
    margin: auto;
    padding: 1.5% 4%;
    list-style-type:none;
    text-align: center;
    text-transform: uppercase;
    font-size: ${theme.fontSize.tiny};

    &:hover{
        background: ${theme.colorMap.cream};
        border-radius: 12px;
    }

    @media ${theme.screenSize.upToSmall} {
        font-size: ${theme.fontSize.micro};
    }
`
const Link = styled.a`
    text-decoration: none;
    color: ${theme.colorMap.darkGrey2};
`
const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5%;
    margin-top: 0;
    width: 95vw;
    background: ${theme.colorMap.mustardYellow};
`

const Nav = () => {
    return (
        <NavBar>
            <Logo href='/'>
                <LogoImg
                    alt="Marigold" 
                    src={marigold} 
                />
                <LogoText>
                    Marrygold
                </LogoText>
            </Logo>
            <Ul>
                <Li><Link href="#">Local Vendors</Link></Li>
                <Li><Link href="#">Contact Us</Link></Li>
                <Li><Link href="#">Sign In</Link></Li>
            </Ul>
        </NavBar>
    )
}


export default Nav;