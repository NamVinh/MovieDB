import {FETCH_NOWPLAYING_REQUEST, FETCH_NOWPLAYING_SUCCESS, FETCH_NOWPLAYING_FAILED} from '../constants/movieConstant';


const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null,
}

function nowplayingReducer( state = initialState, payload) {
    switch (payload.type){
        case FETCH_NOWPLAYING_REQUEST:
            return {
                ...state, 
                requesting: true,
            };
        case FETCH_NOWPLAYING_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data,
                
            };
        case FETCH_NOWPLAYING_FAILED:
            return {
                ...state, 
                requesting: false,
                success: false,
                message: payload.message
            };
        default: return state;
    }
}

export default nowplayingReducer;