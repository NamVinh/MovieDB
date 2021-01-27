import {
    FETCH_TOP_RATED_FAILED, FETCH_TOP_RATED_SUCCESS, FETCH_TOP_RATED_REQUEST
} from '../constants/ActionTypes';
const TOPRATED_API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=5189f4621a63c386a27e8be715fc7ab2&language=en-US&page=1';

export const loadTopRatedMovies = () => async dispatch => {
    try {
        dispatch({ type: FETCH_TOP_RATED_REQUEST});

        const response = await fetch(TOPRATED_API);
        const responseBody = await response.json();

        dispatch({ type: FETCH_TOP_RATED_SUCCESS, data: responseBody.results });
    } catch (e) {
        console.log(e)

        dispatch({ type: FETCH_TOP_RATED_FAILED, message: e})
    }
}