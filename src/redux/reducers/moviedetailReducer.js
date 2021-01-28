import { FETCH_MOVIES_DETAIL_FAILED, FETCH_MOVIES_DETAIL_SUCCESS } from '../constants/ActionTypes';

const initialState = {
	success: false,
	message: null,
	data: null,
};

function moviedetailReducer(state = initialState, payload) {
	switch (payload.type) {
		case FETCH_MOVIES_DETAIL_SUCCESS:
			return {
				...state,
				requesting: false,
				success: true,
				data: payload.data,
			};
		case FETCH_MOVIES_DETAIL_FAILED:
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

export default moviedetailReducer;
