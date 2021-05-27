import { combineReducers } from 'redux';
import updateReducer from './updateReducer';
import memberReducer from './memberReducer';

export default combineReducers({
    update: updateReducer,
    member: memberReducer
});