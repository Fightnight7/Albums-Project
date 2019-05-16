import {combineReducers, createStore} from 'redux'
import fetchedDataReducer from './albumsReducer'


let reducers = combineReducers({
    albumsReducer: fetchedDataReducer,

});

let store = createStore(reducers);

export default store;
