import { createAction } from '@reduxjs/toolkit';

const getAllUsersRequest = createAction('users/getAllUsers/request');
const getAllUsersSuccess = createAction('users/getAllUsers/success');
const getAllUsersError = createAction('users/getAllUsers/error');

const addUserRequest = createAction('users/addUser/request');
const addUserSuccess = createAction('users/addUser/success');
const addUserError = createAction('users/addUser/error');

const editUserRequest = createAction('users/editUser/request');
const editUserSuccess = createAction('users/editUser/success');
const editUserError = createAction('users/editUser/error');

const deleteUserRequest = createAction('users/deleteUser/request');
const deleteUserSuccess = createAction('users/deleteUser/success');
const deleteUserError = createAction('users/deleteUser/error');

const usersActions = {
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersError,
  addUserRequest,
  addUserSuccess,
  addUserError,
  editUserRequest,
  editUserSuccess,
  editUserError,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserError,
};
export default usersActions;
