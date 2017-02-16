import { createStore } from 'redux';
import listReducer from './reducers/listreducer';

const store = createStore(listReducer);

export default store;