import {FETCH_PERSON_FAILED,
    FETCH_PERSON_SUCCESS,
    FETCH_PERSON_REQUEST} from '../constants/movieConstant';

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null
}

function personReducer( state = initialState, payload) {
    switch (payload.type){
        case FETCH_PERSON_REQUEST:
            return {
                ...state, 
                requesting: true,
            };
        case FETCH_PERSON_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data
            };
        case FETCH_PERSON_FAILED:
            return {
                ...state, 
                requesting: false,
                success: false,
                message: payload.message
            };
        default: return state;
    }
}

export default personReducer;