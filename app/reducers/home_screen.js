const initialState = {
	data: []
};
export default function home_screen(state = initialState, action) {
	if (action.type == "APP_DATA_DONE") {
		return { ...state, 'data': action.payload }
     } else {
		return state;
	}
}
