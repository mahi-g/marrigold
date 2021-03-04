import React, { useState } from 'react'
import styled from '@emotion/styled'
import { theme } from '../theme'
import marigold from '../images/marigold.png'
import MediaQueries from '../hooks/MediaQueries'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';

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
    width: 30px;
    height: auto;
    margin: auto;
    padding-bottom: ${theme.fontSize.tiny};
    @media ${theme.screenSize.upToLarge} {
        width: 30px;
        padding-bottom: 0;
        padding-top: ${theme.fontSize.tiny};
    }
`
const Ul = styled.ul`
    display: flex;
    flex-direction: ${ ({column}) => column ? 'column' : 'row' };
    justify-content: space-around;
    width: 35%;
    @media ${theme.screenSize.upToLarge} {
        width: 76%;
        margin: 2px 0;
        padding: 32px;
    }
`
const Li = styled.li`
    padding: 4%;
    list-style-type:none;
    text-align: center;
    text-transform: uppercase;
    font-size: ${theme.fontSize.tiny};
    @media ${theme.screenSize.upToSmall} {
        font-size: ${theme.fontSize.micro};
        padding: 24px 0;
    }
`
const Link = styled.a`
    text-decoration: none;
    color: ${ ({color}) => color ? color : theme.colorMap.darkGrey2};
`
const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0 ${theme.size.medium};
    width: 95vw;
    background: ${theme.colorMap.mustardYellow};
`
const MobileNavBar = styled.div`
    z-index: 200;
    height: 100vh;
    width: 280px;
    background: ${theme.colorMap.darkGrey2};
    position: fixed;
    top: 0;
    transform: ${ ({transform}) => transform ? `translate(0px)` : `translate(-290px)` };
    transition: transform 1.5s ease-in-out;
    @media ${theme.screenSize.upToSmall} {
        width: 50%;
    }
`
const BurgerButton = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    padding-top: ${theme.size.mediumLarge};
    padding-right: ${theme.size.xlarge};
    background: ${theme.colorMap.mustardYellow};
    cursor: pointer;
    &:hover{
        transform: scale(1.2, 1.2);
        transition: transform 0.5s ease-in-out;
    }
    &:focus{
        outline: none;
    }
    @media ${theme.screenSize.upToSmall} {
        padding-right: ${theme.size.xlarge};
    }
`;

const Nav = () => {
    const screen = MediaQueries();
    const [open, setOpen] = useState(false);
    const showSidebar = () => {
        setOpen(!open);
    }
    return (
        <div>
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
            {
                screen <= 1023 
                ?<BurgerButton onClick={showSidebar}> { open ? <CloseIcon /> : <MenuIcon /> }</BurgerButton>
                :<Ul>
                    <Li><Link href="#">Local Vendors</Link></Li>
                    <Li><Link href="#">Contact Us</Link></Li>
                    <Li><Link href="/signin">Sign In</Link></Li>
                </Ul>
            }
            </NavBar>
        { 
            screen <= 1023 &&
            <MobileNavBar transform={ open ? 'true' : ''}>
                <Ul column={'column'}>
                    <Li><Link color = { theme.colorMap.cream } href="#">Local Vendors</Link></Li>
                    <Li><Link  color = { theme.colorMap.cream } href="#">Contact Us</Link></Li>
                    <Li><Link  color = { theme.colorMap.cream } href="/signin">Sign In</Link></Li>
                </Ul>
            </MobileNavBar>
        }
        </div>
    )
}


export default Nav;