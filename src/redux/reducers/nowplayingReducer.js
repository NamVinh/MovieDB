import { FETCH_NOWPLAYING_SUCCESS, FETCH_NOWPLAYING_FAILED } from '../constants/ActionTypes';

const initialState = {
	success: false,
	message: null,
	data: null,
};

function nowPlayingReducer(state = initialState, payload) {
	switch (payload.type) {
		case FETCH_NOWPLAYING_SUCCESS:
			return {
				...state,
				requesting: false,
				success: true,
				data: payload.data,
			};
		case FETCH_NOWPLAYING_FAILED:
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

export default nowPlayingReducer;
