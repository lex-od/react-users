import { createReducer, combineReducers } from '@reduxjs/toolkit';

import testUsers from '../../json/testUsers.json';
import usersActions from './usersActions';

const {
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersError,
  setPrevPage,
  setNextPage,
} = usersActions;

export const PAGE_SIZE = 5;

const list = createReducer(testUsers, {
  [getAllUsersSuccess]: (_, { payload }) => payload,
});

const listPending = createReducer(true, {
  [getAllUsersRequest]: () => true,
  [getAllUsersSuccess]: () => false,
  [getAllUsersError]: () => false,
});

const listError = createReducer(null, {
  [getAllUsersRequest]: () => null,
  // [getAllUsersError]: (_, { payload }) => payload,
});

const currentPage = createReducer(1, {
  [setPrevPage]: state => state - 1,
  [setNextPage]: state => state + 1,
});

export default combineReducers({
  list,
  listPending,
  listError,
  currentPage,
});
