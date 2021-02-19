import React from 'react';

import UserList from './user-list/user-list';

const Users = ({users_data, current_page, show_more_status, getUsersData}) => {
    return (
        <section id={'users_container'} className={'users container'}>
            <div className={'users__text'}>
                <h1 className={'h1'}>
                    Our cheerful users
                </h1>

                <p className={'p1'}>
                    Attention! Sorting users by registration date
                </p>
            </div>
            
            <UserList users_data={users_data}/>

            {
                (show_more_status !== 'hide') &&
                    <button onClick={() => getUsersData(current_page)} className={['button_primary', show_more_status].join(' ')}>
                        Show more
                    </button>
            }
            
        </section>
    );
}

export default Users;