import {
    FETCH_MOVIES_VIDEO_REQUEST,FETCH_MOVIES_VIDEO_SUCCESS,FETCH_MOVIES_VIDEO_FAILED,
} from '../constants/movieConstant';

export const loadMoviesVideo = (fetchUrl) => async dispatch => {
    try {
        dispatch({ type: FETCH_MOVIES_VIDEO_REQUEST});

        // const response = await fetch(fetchUrl);
        // const responseBody = await response.json();

        await  fetch(fetchUrl)
        .then(response => response.json())
        .then((data) => {
            dispatch({ type: FETCH_MOVIES_VIDEO_SUCCESS, data: data.results[0].key });
        })
        //dispatch({ type: FETCH_MOVIES_SUCCESS, data: responseBody.results });
    } catch (e) {
        console.log(e)

        dispatch({ type: FETCH_MOVIES_VIDEO_FAILED, message: e})
    }
}



