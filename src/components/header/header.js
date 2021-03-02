import React, { useState } from 'react';
import { Link } from "react-scroll";

import './header.scss'
import NavTablet from './nav-tablet';

const MyLink = ({to, className, ...props}) => {
    return (
        <Link to={to} className={className} spy={true} smooth={true} offset={-60} duration={500} activeClass={'active'} onSetActive={() => {console.log(to)}}>
            {props.children}
        </Link>
    )
}

const Header = (props) => {

    const [nav_mobile, setNavMobileStatus] = useState(false);
    return (
        <header className={'container'}>
            <MyLink to={'main_container'} className={'logotype'}>
                <img width={135} height={20} src={require('../../assets/logo.svg').default} alt={'logotype'}/>
            </MyLink>

            <button className={'toggle_navbar only_tablet'} onClick={() => setNavMobileStatus(true)}>
                <img width={20} height={15} src={require('../../assets/menu-icon.svg').default} alt={'logotype'}/>
            </button>

            { 
                nav_mobile && <NavTablet closeNav={() => setNavMobileStatus(false)}/>
            }

            <nav className={'nav_bar only_desktop'}>
                <MyLink to="main_container" className='nav_bar__link'>
                    About me
                </MyLink>

                <MyLink to="acquaintance_container" className='nav_bar__link'>
                    Relationships
                </MyLink>

                <MyLink to="users_container" className='nav_bar__link'>
                    Users
                </MyLink>

                <MyLink to="register_container" className='nav_bar__link'>
                    Sign Up
                </MyLink>
            </nav>
        </header>
    )
}

export default Header;