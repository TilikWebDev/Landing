import React from 'react';
import { connect } from 'react-redux';

import { getUsersData } from '../../../redux/users-reducer';
import Users from './users';

const UsersContainer = ({users_data, current_page, show_more_status, getUsersData}) => {
    return (
        <Users users_data={users_data} current_page={current_page} show_more_status={show_more_status} getUsersData={getUsersData}/>
    );
}

let mapStateToProps = (state) => {
    return {
        users_data: state.users.users_data,
        current_page: state.users.current_page,
        show_more_status: state.users.show_more_status
    }
}

export default connect(mapStateToProps, {
    getUsersData
})(UsersContainer);