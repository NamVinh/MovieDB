import {FETCH_MOVIES_VIDEO_FAILED,
    FETCH_MOVIES_VIDEO_SUCCESS,
    FETCH_MOVIES_VIDEO_REQUEST} from '../constants/ActionTypes';

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null,
    isOpen: false
}

function movievideoReducer( state = initialState, payload) {
    switch (payload.type){
        case FETCH_MOVIES_VIDEO_REQUEST:
            return {
                ...state, 
                requesting: true,
            };
        case FETCH_MOVIES_VIDEO_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data,
                
            };
        case FETCH_MOVIES_VIDEO_FAILED:
            return {
                ...state, 
                requesting: false,
                success: false,
                message: payload.message
            };
        default: return state;
    }
}

export default movievideoReducer;