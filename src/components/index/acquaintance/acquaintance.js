import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import { Link } from "react-scroll";

const Acquaintance = ({scrollPosition}) => {
    return (
        <section id={'acquaintance_container'} className={'acquaintance container'}>
            <h1 className={'h1'}>
                Let's get acquainted
            </h1>

            <div className={'acquaintance__content'}>
                <div className={'acquaintance__image'}>
                    <LazyLoadImage
                        alt={'programmer'}
                        width={339}
                        height={286}
                        scrollPosition={scrollPosition}
                        src={require('../../../assets/man-laptop-v1.svg').default}
                    />
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

                    <Link 
                        to="register_container" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='flat_button' 
                    >
                        Sing up now
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default trackWindowScroll(Acquaintance);