import React from 'react';

import User from './user';

const UserList = ({users_data}) => {
    return (
        <div className={'users__list'}>
            {
                users_data.map((u, index) => 
                    <User key={index} user={u}/>
                )
            }
        </div>
    );
}

export default UserList;