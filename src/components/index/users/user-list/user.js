import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

import DataTooltip from '../../../common/data-tooltip/data-tooltip';
import PhotoCover from '../../../../assets/photo-cover.svg';

const User = ({user, scrollPosition}) => {
    return (
        <div className={'user'}>
            <div className={'user__container'}>
                <div className={'user__image'}>
                    <LazyLoadImage
                        alt={user.name}
                        width={70}
                        height={70}
                        scrollPosition={scrollPosition}
                        src={user.photo}
                        onError={(e) => (e.target.onerror = null, e.target.src = PhotoCover)}
                    />
                </div>

                <h2 className={'user__name h2'}>
                    {user.name}
                </h2>

                <p className={'user__position p1'}>
                    {user.position}
                </p>

                <DataTooltip title={user.email}>
                    <p className={'user__email p1'}>
                        <span className={'user__email_overflow'}>
                            {user.email}
                        </span>
                    </p>
                </DataTooltip>

                <p className={'user__phone p1'}>
                    {user.phone}
                </p>
            </div>
        </div>
    );
}

export default trackWindowScroll(User);