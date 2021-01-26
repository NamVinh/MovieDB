import {
    
    FETCH_PERSON_FAILED, FETCH_PERSON_SUCCESS, FETCH_PERSON_REQUEST,
    
} from '../constants/movieConstant';
const PERSON_API = 'https://api.themoviedb.org/3/trending/person/week?api_key=5189f4621a63c386a27e8be715fc7ab2';

export const loadPersons = () => async dispatch => {
    try {
        dispatch({ type: FETCH_PERSON_REQUEST});

        const response = await fetch(PERSON_API);
        const responseBody = await response.json();

        dispatch({ type: FETCH_PERSON_SUCCESS, data: responseBody.results});
    } catch (e) {
        console.log(e)

        dispatch({ type: FETCH_PERSON_FAILED, message: e})
    }
}