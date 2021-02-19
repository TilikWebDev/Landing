import {usersAPI, registerAPI} from '../api/api';
import {getUsersData} from './users-reducer';

const SET_POSITIONS = 'REGISTER/SET_POSITIONS';
const SET_REGISTER_BUTTON_STATUS = 'REGISTER/SET_REGISTER_BUTTON_STATUS'

let initialState = {
    positions: [
        
    ],

    register_button_status: 'disabled'
};

export const setRegisterButtonStatus = (status) => {
    return {
        type: SET_REGISTER_BUTTON_STATUS,
        status
    }
}

export const setPostionsData = (data) => {
    return {
        type: SET_POSITIONS,
        positions: data
    }
}

// Thunk


export const getPositions = () => {
    return async (dispatch) => {
        try {
            let {positions} = await registerAPI.loadPositionsData();

            dispatch(setPostionsData(positions));
            dispatch(setRegisterButtonStatus('enable'));
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const register = (data, forceUpdate) => {
    return async (dispatch) => {
        try {
            dispatch(setRegisterButtonStatus('disabled'));
            await usersAPI.sendRegisterData(data);
            dispatch(getUsersData(0));
            forceUpdate({});
        } catch (error) {
            alert(error.response.data.message);
        }

        dispatch(setRegisterButtonStatus('enable'));
    }
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSITIONS:
            return {
                ...state,
                positions: [
                    ...action.positions
                ]
            }

        case SET_REGISTER_BUTTON_STATUS:
            return {
                ...state,
                register_button_status: action.status
            }

        default: 
            return state;
    }
}

export default registerReducer;