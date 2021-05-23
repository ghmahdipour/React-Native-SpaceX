import { createStore } from 'redux'
import reducers from '../reducers'

const store = createStore(reducers);
global.store = store
export default store;
