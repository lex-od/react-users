import { createReducer, combineReducers } from '@reduxjs/toolkit';

import testUsers from '../../json/testUsers.json';
import usersActions from './usersActions';

const {
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersError,
  setPrevPage,
  setNextPage,
  addUserRequest,
  addUserSuccess,
  addUserError,
  editUserRequest,
  editUserSuccess,
  editUserError,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserError,
} = usersActions;

export const PAGE_SIZE = 5;

const list = createReducer(testUsers, {
  [getAllUsersSuccess]: (_, { payload }) => payload,
  // [getAllUsersError]: () => [],

  [addUserSuccess]: (state, { payload }) => [...state, payload],

  [editUserSuccess]: (state, { payload }) => {
    return state.map(user => (user.id === payload.id ? payload : user));
  },

  [deleteUserSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const currentPage = createReducer(1, {
  [setPrevPage]: state => state - 1,
  [setNextPage]: state => state + 1,
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

const actionsPending = createReducer(false, {
  [addUserRequest]: () => true,
  [addUserSuccess]: () => false,
  [addUserError]: () => false,

  [editUserRequest]: () => true,
  [editUserSuccess]: () => false,
  [editUserError]: () => false,

  [deleteUserRequest]: () => true,
  [deleteUserSuccess]: () => false,
  [deleteUserError]: () => false,
});

// Для этой ошибки не делал отображение в интерфейсе
// Но можно выводить какое-то сообщение в форме и списке юзеров
const actionsError = createReducer(null, {
  [addUserRequest]: () => null,
  [addUserError]: (_, { payload }) => payload,

  [editUserRequest]: () => null,
  [editUserError]: (_, { payload }) => payload,

  [deleteUserRequest]: () => null,
  [deleteUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  list,
  currentPage,
  listPending,
  listError,
  actionsPending,
  actionsError,
});
