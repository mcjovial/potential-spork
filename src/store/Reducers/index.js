import { combineReducers } from 'redux';
import userReduser from './userReduser';

const reducers = combineReducers({
  Users: userReduser,
});

export default reducers;
