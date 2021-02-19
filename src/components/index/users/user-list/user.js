import React from 'react';

import DataTooltip from '../../../common/data-tooltip/data-tooltip';
import PhotoCover from '../../../../assets/photo-cover.png';

const User = ({user}) => {
    return (
        <div className={'user'}>
            <div className={'user__container'}>
                <div className={'user__image'}>
                    <img 
                        alt={user.name} 
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
                        {user.email}
                    </p>
                </DataTooltip>

                <p className={'user__phone p1'}>
                    {user.phone}
                </p>
            </div>
        </div>
    );
}

export default User;