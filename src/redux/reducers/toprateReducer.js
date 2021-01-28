import { FETCH_TOP_RATED_FAILED, FETCH_TOP_RATED_SUCCESS } from '../constants/ActionTypes';

const initialState = {
	success: false,
	message: null,
	data: null,
};

function topRateReducer(state = initialState, payload) {
	switch (payload.type) {
		case FETCH_TOP_RATED_SUCCESS:
			return {
				...state,
				requesting: false,
				success: true,
				data: payload.data,
			};
		case FETCH_TOP_RATED_FAILED:
			return {
				...state,
				requesting: false,
				success: false,
				message: payload.message,
			};
		default:
			return state;
	}
}

export default topRateReducer;
