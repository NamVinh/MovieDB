import {FETCH_PERSON_DETAIL_REQUEST,
    FETCH_PERSON_DETAIL_SUCCESS,
    FETCH_PERSON_DETAIL_FAILED} from '../constants/movieConstant';

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null
}

function persondetailReducer( state = initialState, payload) {
    switch (payload.type){
        case FETCH_PERSON_DETAIL_REQUEST:
            return {
                ...state, 
                requesting: true,
            };
        case FETCH_PERSON_DETAIL_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data
            };
        case FETCH_PERSON_DETAIL_FAILED:
            return {
                ...state, 
                requesting: false,
                success: false,
                message: payload.message
            };
        default: return state;
    }
}

export default persondetailReducer;