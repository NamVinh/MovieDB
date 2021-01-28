import { FETCH_PERSON_FAILED, FETCH_PERSON_SUCCESS } from '../constants/ActionTypes';

const initialState = {
	success: false,
	message: null,
	data: null,
};

function personReducer(state = initialState, payload) {
	switch (payload.type) {
		case FETCH_PERSON_SUCCESS:
			return {
				...state,
				requesting: false,
				success: true,
				data: payload.data,
			};
		case FETCH_PERSON_FAILED:
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

export default personReducer;
