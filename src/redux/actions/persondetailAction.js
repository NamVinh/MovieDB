import {
    
    FETCH_PERSON_DETAIL_FAILED, FETCH_PERSON_DETAIL_SUCCESS, FETCH_PERSON_DETAIL_REQUEST,
    
} from '../constants/movieConstant';

export const loadPersonsDetail = (fetchUrl) => async dispatch => {
    try {
        dispatch({ type: FETCH_PERSON_DETAIL_REQUEST});

        const response = await fetch(fetchUrl);
        const responseBody = await response.json();

        dispatch({ type: FETCH_PERSON_DETAIL_SUCCESS, data: responseBody.cast});
    } catch (e) {
        console.log(e)

        dispatch({ type: FETCH_PERSON_DETAIL_FAILED, message: e})
    }
}