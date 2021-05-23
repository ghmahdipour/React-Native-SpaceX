const initialState = {
	data: []
};
export default function up_coming(state = initialState, action) {
	if(action.type == "UPCOMING_DATA_DONE"){
        return { ...state, 'data': action.payload }
     } else {
		return state;
	}
}