import { combineReducers } from 'redux';
import chatGPTReducer from './ChatGPTReducer';

const rootReducer = combineReducers({
    chatGPT: chatGPTReducer,
});

export default rootReducer;
