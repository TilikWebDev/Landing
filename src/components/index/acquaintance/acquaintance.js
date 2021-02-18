import React from 'react';
import { NavLink } from 'react-router-dom';

const Acquaintance = () => {
    return (
        <section className={'acquaintance container'}>
            <h1 className={'h1'}>
                Let's get acquainted
            </h1>

            <div className={'acquaintance__content'}>
                <div className={'acquaintance__image'}>
                    <img src={require('../../../assets/man-laptop-v1.svg').default} alt={'programmer'}/>
                </div>

                <div className={'acquaintance__text'}>
                    <h2 className={'h2'}>
                        I am cool frontend developer
                    </h2>

                    <p className={'p1'}>
                        We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.
                    </p>

                    <p className={'p1'}>
                        If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3. 
                    </p>

                    <NavLink to={'/login'} className={'flat_button'}>
                        Sign up Now
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Acquaintance;