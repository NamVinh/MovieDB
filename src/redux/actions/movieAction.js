import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILED } from '../constants/ActionTypes';

export const loadMovies = (fetchUrl) => async (dispatch) => {
	try {
		// const response = await fetch(fetchUrl);
		// const responseBody = await response.json();

		await fetch(fetchUrl)
			.then((response) => response.json())
			.then((data) => {
				dispatch({ type: FETCH_MOVIES_SUCCESS, data: data.results });
			});
		//dispatch({ type: FETCH_MOVIES_SUCCESS, data: responseBody.results });
	} catch (e) {
		console.log(e);

		dispatch({ type: FETCH_MOVIES_FAILED, message: e });
	}
};
