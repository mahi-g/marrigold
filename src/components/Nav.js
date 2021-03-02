import React from 'react'
import styled from '@emotion/styled'
import { theme } from '../theme'

const Logo = styled.h2`
    font-family: ${theme.fontFamily.logo}, sans-serif;
    text-align: left;
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
    margin: ${theme.size.medium} ${theme.size.mediumLarge};
    padding: 0 ${theme.size.medium};
    width: 95vw;
    background: ${theme.colorMap.mustardYellow};
`

const Nav = () => {
    return (
        <NavBar>
            <Logo>Marrigold</Logo>
            <Ul>
                <Li><Link href="#">Local Vendors</Link></Li>
                <Li><Link href="#">Contact Us</Link></Li>
                <Li><Link href="#">Sign In</Link></Li>
            </Ul>
        </NavBar>
    )
}


export default Nav;