import React, { useState } from 'react';
import { Link } from "react-scroll";

import './header.scss'
import NavTablet from './nav-tablet';

const Header = (props) => {

    const [nav_mobile, setNavMobileStatus] = useState(false);

    return (
        <header className={'container'}>
            <Link 
                to="main_container" 
                spy={true} 
                smooth={true} 
                offset={-60}
                duration={500} 
                className='logotype' 
            >
                <img src={require('../../assets/logo.svg').default} alt={'logotype'}/>
            </Link>

            <button className={'toggle_navbar only_tablet'} onClick={() => setNavMobileStatus(true)}>
                <img src={require('../../assets/menu-icon.svg').default} alt={'logotype'}/>
            </button>

            { 
                nav_mobile && <NavTablet closeNav={() => setNavMobileStatus(false)}/>
            }

            <nav className={'nav_bar only_desktop'}>
                <Link 
                    to="main_container" 
                    spy={true} 
                    smooth={true} 
                    offset={-60}
                    duration={500} 
                    className='nav_bar__link' 
                    activeClass='active'
                >
                    About me
                </Link>

                <Link 
                    to="acquaintance_container" 
                    spy={true} 
                    smooth={true} 
                    offset={-60}
                    duration={500} 
                    className='nav_bar__link' 
                    activeClass='active'
                >
                    Relationships
                </Link>

                <Link 
                    to="users_container" 
                    spy={true} 
                    smooth={true} 
                    offset={-60}
                    duration={500} 
                    className='nav_bar__link' 
                    activeClass='active'
                >
                    Users
                </Link>

                <Link 
                    to="register_container" 
                    spy={true} 
                    smooth={true} 
                    offset={-60}
                    duration={500} 
                    className='nav_bar__link' 
                    activeClass='active'
                >
                    Sign Up
                </Link>
            </nav>
        </header>
    )
}

export default Header;