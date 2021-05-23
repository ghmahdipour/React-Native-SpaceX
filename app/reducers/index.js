import { combineReducers } from 'redux';
import home_screen from './home_screen'
import past_screen from './past_screen'
import up_coming from './up_coming'

export default combineReducers({
	home_screen,
	past_screen,
	up_coming
});