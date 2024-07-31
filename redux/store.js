import {configureStore, combineReducers} from '@reduxjs/toolkit';
import User from './reducers/User';
import Categories from './reducers/Categories';
import Donations from './reducers/Donations';

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMidleware => {
  //   return getDefaultMidleware().concat(logger);
  // },
});

export default store;
