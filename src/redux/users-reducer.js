import {usersAPI} from '../api/api';

const SET_USERS_INITIALIZED = 'USERS/SET_USERS_INITIALIZED';
const SET_USERS_DATA = 'USERS/SET_USERS_DATA';
const SET_SHOW_MORE_STATUS = 'USERS/SET_SHOW_MORE_STATUS';

let initialState = {
    users_data: [

    ],

    total_pages: 0,
    current_page: 0,
    show_more_status: 'disabled'
};

export const setUsersData = (new_users, total_pages, current_page) => {
    return {
        type: SET_USERS_DATA,
        new_users,
        total_pages,
        current_page
    }
}

export const setShowMoreStatus = (status) => {
    return {
        type: SET_SHOW_MORE_STATUS,
        status
    }
}

// Thunk

export const getUsersData = (current_page) => {
    return async (dispatch) => {
        try {
            dispatch(setShowMoreStatus('disabled'));

            let _current_page = current_page + 1;
            let {users, total_pages} = await usersAPI.loadUsersData(_current_page);

            dispatch(setUsersData(users, total_pages, _current_page));
            dispatch(setShowMoreStatus((_current_page >= total_pages) ? 'hide': 'enable'));
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOW_MORE_STATUS:
            return {
                ...state,
                show_more_status: action.status
            }

        case SET_USERS_DATA:
            return {
                ...state,
                users_data: (action.current_page === 1) ? 
                    [
                        ...action.new_users
                    ]
                    :
                    [
                        ...state.users_data,
                        ...action.new_users
                    ],
                total_pages: action.total_pages,
                current_page: action.current_page
            }
    
        default: 
            return state;
    }
}

export default usersReducer;