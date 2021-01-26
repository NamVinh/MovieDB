import {FETCH_MOVIES_DETAIL_FAILED,
    FETCH_MOVIES_DETAIL_SUCCESS,
    FETCH_MOVIES_DETAIL_REQUEST} from '../constants/movieConstant';

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null,
}

function moviedetailReducer( state = initialState, payload) {
    switch (payload.type){
        case FETCH_MOVIES_DETAIL_REQUEST:
            return {
                ...state, 
                requesting: true,
            };
        case FETCH_MOVIES_DETAIL_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data,
                
            };
        case FETCH_MOVIES_DETAIL_FAILED:
            return {
                ...state, 
                requesting: false,
                success: false,
                message: payload.message
            };
        default: return state;
    }
}

export default moviedetailReducer;