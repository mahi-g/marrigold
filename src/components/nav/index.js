import React, { useState } from 'react';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import styled from '@emotion/styled';
import { theme } from '../../theme';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import StorefrontIcon from '@material-ui/icons/Storefront';
import TextsmsRoundedIcon from '@material-ui/icons/TextsmsRounded';
import marigold from '../../images/marigold.png';

const IS_LOGGED_IN = true;
const user = {
    name: "Mahi G.",
    email: "mahi.gulshan@gmail.com"
}

const MOBILE_NAV_WIDTH = '280px';
const BURGER_BUTTON_SIZE = '50px';
const MOBILE_LI_WIDTH = '200px';

const Logo = styled.a`
    display: flex;
    text-decoration: none;
`
const LogoText = styled.div`
    color: black;
    font-family: ${theme.fontFamily.logo}, sans-serif;
    font-size: ${theme.fontSize.large};
    padding-top: ${theme.fontSize.medium};
    text-align: left;
`
const LogoImg = styled.img`
    width: 30px;
    height: auto;
    margin: auto;
    padding-bottom: ${theme.fontSize.small};
    @media ${theme.screenSize.upToLarge} {
        width: 30px;
        padding-bottom: 0;
        padding-top: ${theme.fontSize.medium};
    }
`
const Ul = styled.ul`
    display: flex;
    flex-direction: ${ ({column}) => column ? 'column' : 'row' };
    justify-content: space-around;
    width: 400px;
    @media ${theme.screenSize.upToLarge} {
        width: 76%;
        padding: ${theme.size.small} 0;
    }
`
const Li = styled.li`
    width: 120px;
    padding: 24px 2px;
    list-style-type:none;
    text-align: center;
    text-transform: uppercase;
    font-size: ${theme.fontSize.tiny};
    @media ${theme.screenSize.upToLarge} {
        font-size: ${theme.fontSize.tiny};
        padding: ${theme.size.tiny} ${theme.size.xlarge};
        text-align: left;
        width: ${MOBILE_LI_WIDTH};
    }
`
const Link = styled.a`
    text-decoration: none;
    color: ${ ({color}) => color ? color : theme.colorMap.darkGrey2};
    &:hover {
        color: ${theme.colorMap.cream};
    }
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
    padding-bottom: 2px;
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
    width: ${BURGER_BUTTON_SIZE};
    height: ${BURGER_BUTTON_SIZE};
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
    width: 150px;
    font-size: ${theme.fontSize.medium};
    padding: ${theme.size.default} 50px;
    padding-right: 0;
    padding-top: 0;
    margin: 0 ${theme.size.xmediumLarge};
    border-bottom: 1px solid white;
`
const Email = styled.div`
    font-size: ${theme.fontSize.micro};
`

const Nav = () => {
    const screenSize = useMediaQueries();
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
                screenSize <= 1023 
                ?<BurgerButton onClick={showSidebar}> { open ? <CloseIcon /> : <MenuIcon /> }</BurgerButton>
                :<Ul>
                    <Li><Link href="#">Local Vendors</Link></Li>
                    <Li><Link href="#">Contact Us</Link></Li>
                    <Li><Link href="/signin">Vendor Sign In</Link></Li>
                </Ul>
            }
            </NavBar>
        { 
            screenSize <= 1023 &&
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
                    Vendor Sign In
                </Link>
            </Li>
        </Ul>
    </>
);
export default Nav;