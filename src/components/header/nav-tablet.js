import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

const NavTablet = ({closeNav}) => {

    useEffect(() => {
        window.addEventListener('click', (e) => {
            (e.target.id === 'nav_tablet') && closeNav();
        })

        return window.removeEventListener('click', () => false)
    })

    return (
        <nav id={'nav_tablet'} className={'only_tablet nav_bar'}>
            <div className={'nav_tablet__container'}>
                <div className={'nav_tablet__content'}>
                    <div className={'category'}>
                        <Link 
                            to="main_container" 
                            spy={true} 
                            smooth={true} 
                            offset={-40}
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
                            offset={-40}
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
                            offset={-40}
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
                            offset={-40}
                            duration={500} 
                            className='nav_bar__link' 
                            activeClass='active'
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavTablet;