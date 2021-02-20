import React from 'react';
import { Link } from "react-scroll";

const Main = () => {

    let styles = {
        backgroundImage: `url(${require('../../../assets/banner-photo.webp').default})`
    }

    return (
        <section id={'main_container'} className={'main container'} style={styles}>
            <h1 className={'h1 main__headline'}>
                Test assignment
                <br></br>
                for Frontend 
                <br></br>
                Developer position
            </h1>

            <p className={'main__text p1'}>
                We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.  
                <span className={'only_mobile'}>
                    Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens
                </span>
            </p>

            <Link 
                to="register_container" 
                spy={true} 
                smooth={true} 
                duration={500} 
                className='button_primary' 
            >
                Sing up now
            </Link>
        </section>
    );
}

export default Main;