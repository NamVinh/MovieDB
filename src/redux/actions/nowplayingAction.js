import {FETCH_NOWPLAYING_REQUEST, FETCH_NOWPLAYING_SUCCESS, FETCH_NOWPLAYING_FAILED} from '../constants/movieConstant';
const NOWPLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=5189f4621a63c386a27e8be715fc7ab2&language=en-US&page=1';

export const loadNowPlaying = () => async dispatch => {
    try {
        dispatch({ type: FETCH_NOWPLAYING_REQUEST})
        const response = await fetch(NOWPLAYING_API);
        const responseBody = await response.json();
        dispatch({ type: FETCH_NOWPLAYING_SUCCESS, data: responseBody.results})
    } catch (e) {
        console.log(e)
        dispatch({ type: FETCH_NOWPLAYING_FAILED})
    }
}