import {configureStore, combineReducers} from '@reduxjs/toolkit';
import User from './reducers/User';
import {logger} from 'redux-logger';

const rootReducer = combineReducers({
  user: User,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMidleware => {
    return getDefaultMidleware().concat(logger);
  },
});

export default store;
