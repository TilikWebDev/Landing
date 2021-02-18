import { getPositions } from './register-reducer';
import { getUsersData } from './users-reducer';

const SET_APP_INITIALIZED = 'APP/SET_APP_INITIALIZED';

let initialState = {
    initialized: false
}

export const changeInitialized = () => {
    return {
        type: SET_APP_INITIALIZED
    }
}

export const initializeApp = () => {
    return (dispatch) => {
        try {
            let get_positions_promise = dispatch(getPositions());
            let get_users_promise = dispatch(getUsersData(0));

            Promise.all([get_positions_promise, get_users_promise]).then(() => {
                dispatch(changeInitialized());
            });   
        } catch (error) {
            alert(error.response.data.message);
        }    
    }
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APP_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export default appReducer;