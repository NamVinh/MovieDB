import {FETCH_GENRE_FAILED,
    FETCH_GENRE_SUCCESS,
    FETCH_GENRE_REQUEST} from '../constants/movieConstant';

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null,
}

function genreReducer( state = initialState, payload) {
    switch (payload.type){
        case FETCH_GENRE_REQUEST:
            return {
                ...state, 
                requesting: true,
            };
        case FETCH_GENRE_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data,
                
            };
        case FETCH_GENRE_FAILED:
            return {
                ...state, 
                requesting: false,
                success: false,
                message: payload.message
            };
        default: return state;
    }
}

export default genreReducer;