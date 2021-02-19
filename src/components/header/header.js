import React from 'react';
import { Link } from "react-scroll";

import './header.scss'

const Header = (props) => {
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

            <nav className={'nav_bar'}>
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