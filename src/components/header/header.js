import { NavLink } from "react-router-dom"
import './header.scss'

const Header = (props) => {
    return (
        <header className={'container'}>
            <NavLink to={'/'} className={'logotype'}>
                <img src={require('../../assets/logo.svg').default} alt={'logotype'}/>
            </NavLink>

            <div className={'nav_bar'}>
                <NavLink className={'nav_bar__link'} to={'/register'}>
                    About me
                </NavLink>

                <NavLink className={'nav_bar__link'} to={'/register'}>
                    Relationships
                </NavLink>

                <NavLink className={'nav_bar__link'} to={'/register'}>
                    Requirements
                </NavLink>

                <NavLink className={'nav_bar__link'} to={'/register'}>
                    Users
                </NavLink>

                <NavLink className={'nav_bar__link'} to={'/register'}>
                    Sign Up
                </NavLink>
            </div>
        </header>
    )
}

export default Header;