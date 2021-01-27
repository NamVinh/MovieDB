import {FETCH_GENRE_REQUEST, FETCH_GENRE_SUCCESS, FETCH_GENRE_FAILED} from '../constants/ActionTypes';
const GENRE_API = 'https://api.themoviedb.org/3/genre/movie/list?api_key=5189f4621a63c386a27e8be715fc7ab2&language=en-US';

export const loadGenres = () => async dispatch => {
    try {
        dispatch({ type: FETCH_GENRE_REQUEST})
        const response = await fetch(GENRE_API);
        const responseBody = await response.json();
        dispatch({ type: FETCH_GENRE_SUCCESS, data: responseBody.genres})
    } catch (e) {
        console.log(e)
        dispatch({ type: FETCH_GENRE_FAILED})
    }
}