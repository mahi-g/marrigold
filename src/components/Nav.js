import React, { useState } from 'react'
import styled from '@emotion/styled'
import { theme } from '../theme'
import marigold from '../images/marigold.png'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CloseIcon from '@material-ui/icons/Close';
import MediaQueries from '../hooks/MediaQueries'
import MenuIcon from '@material-ui/icons/Menu'
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import StorefrontIcon from '@material-ui/icons/Storefront';
import TextsmsRoundedIcon from '@material-ui/icons/TextsmsRounded';

const IS_LOGGED_IN = true;
const user = {
    name: "Mahi G.",
    email: "mahi.gulshan@gmail.com"
}

const MOBILE_NAV_WIDTH = '280px';
const BURGER_BUTTON = '50px';
const MOBILE_LI_WIDTH = '200px';

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
        padding: ${theme.size.large};
    }
`
const Li = styled.li`
    padding: 4%;
    list-style-type:none;
    text-align: center;
    text-transform: uppercase;
    font-size: ${theme.fontSize.tiny};
    @media ${theme.screenSize.upToLarge} {
        font-size: ${theme.fontSize.tiny};
        padding: ${theme.size.xsmall} ${theme.size.xlarge};
        text-align: left;
        width: ${MOBILE_LI_WIDTH};
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
    width: ${MOBILE_NAV_WIDTH};
    background: ${theme.colorMap.darkGrey2};
    color: ${theme.colorMap.white};
    position: fixed;
    top: 0;
    transform: ${ ({transform}) => transform ? `translate(0px)` : `translate(-290px)` };
    transition: transform 1s ease-in-out;
    @media ${theme.screenSize.upToSmall} {
        width: 70%;
    }
`
const BurgerButton = styled.button`
    width: ${BURGER_BUTTON};
    height: ${BURGER_BUTTON};
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
`
const Icon = styled.div`
    position: relative;
    bottom: ${ ({bottom}) => bottom ? `${bottom}px` : '-20px' };
    left: ${ ({left}) => left ? `${left}px` : '-36px' };
`
const Profile = styled.div`
    width: 140px;
    font-size: 20px;
    padding-left: 70px;
    padding-right: 0px;
    padding-bottom: 15px;
    margin: 0 30px;
    border-bottom: 0.5px solid white;
`
const Email = styled.div`
    font-size: 10px;
`

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
                <MobileLinks />
            </MobileNavBar>
        }
        </div>
    )
}

const MobileLinks = () => (
    <>
        {
            IS_LOGGED_IN && <Profile>
                <Icon bottom="-40" left="-50">
                    <AccountCircleRoundedIcon fontSize="large"/>
                </Icon>
                <div>
                    {user.name}
                    <Email>{user.email}</Email>
                </div>
            </Profile>
        }
        <Ul column={'column'}>
                <Li>
                    <Link color = { theme.colorMap.white } href="#"> 
                        <Icon><StorefrontIcon fontSize='small'/></Icon>
                        Local Vendors
                    </Link>
                </Li>
                <Li>
                    <Link  color = { theme.colorMap.white } href="#"> 
                        <Icon><TextsmsRoundedIcon fontSize='small'/> </Icon>
                        Contact Us
                    </Link>
                </Li>            
            <Li>
                <Link  color = { theme.colorMap.white } href="/signin">
                   <Icon><LockOpenRoundedIcon fontSize='small'/></Icon> 
                    Sign In
                </Link>
            </Li>
        </Ul>
    </>
);
export default Nav;