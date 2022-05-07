import { createReducer, combineReducers } from '@reduxjs/toolkit';

import usersActions from './usersActions';

const { getAllUsersRequest, getAllUsersSuccess, getAllUsersError } = usersActions;

export const PAGE_SIZE = 5;

const list = createReducer(null, {
  [getAllUsersSuccess]: (_, { payload }) => payload,
});

const listPending = createReducer(true, {
  [getAllUsersRequest]: () => true,
  [getAllUsersSuccess]: () => false,
  [getAllUsersError]: () => false,
});

const listError = createReducer(null, {
  [getAllUsersRequest]: () => null,
  [getAllUsersError]: (_, { payload }) => payload,
});

const currentPage = createReducer(1, {});

export default combineReducers({
  list,
  listPending,
  listError,
  currentPage,
});
