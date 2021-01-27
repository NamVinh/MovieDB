import {FETCH_PERSON_DETAIL_FAILED, FETCH_PERSON_DETAIL_SUCCESS} from '../constants/ActionTypes';

export const loadPersonsDetail = (fetchUrl) => async dispatch => {
    try {

        const response = await fetch(fetchUrl);
        const responseBody = await response.json();

        dispatch({ type: FETCH_PERSON_DETAIL_SUCCESS, data: responseBody.cast});
    } catch (e) {
        console.log(e)

        dispatch({ type: FETCH_PERSON_DETAIL_FAILED, message: e})
    }
}