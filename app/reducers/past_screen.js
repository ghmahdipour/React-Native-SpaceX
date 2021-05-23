const initialState = {
	data: []
};

export default function past_screen(state = initialState, action) {
	if(action.type == "PAST_DATA_DONE"){
		let previous_data = state.data
        return { ...state, 'data': action.payload.show ? [...previous_data, ...action.payload.data] : action.payload.data}
     }else {
		return state;
	}
}