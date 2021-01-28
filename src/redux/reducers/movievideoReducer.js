import { FETCH_MOVIES_VIDEO_FAILED, FETCH_MOVIES_VIDEO_SUCCESS } from '../constants/ActionTypes';

const initialState = {
	success: false,
	message: null,
	data: null,
};

function movievideoReducer(state = initialState, payload) {
	switch (payload.type) {
		case FETCH_MOVIES_VIDEO_SUCCESS:
			return {
				...state,
				requesting: false,
				success: true,
				data: payload.data,
			};
		case FETCH_MOVIES_VIDEO_FAILED:
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

export default movievideoReducer;
