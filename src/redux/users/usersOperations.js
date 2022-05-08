import { api } from '../../services';
import usersActions from './usersActions';

const {
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
} = usersActions;

const getAllUsers = () => async dispatch => {
  dispatch(getAllUsersRequest());

  try {
    const { data } = await api.getAllUsers();

    dispatch(getAllUsersSuccess({ ...data }));
  } catch ({ name, message }) {
    dispatch(getAllUsersError({ name, message }));
  }
};

const addUser = user => async dispatch => {
  dispatch(addUserRequest());

  try {
    const { data } = await api.addUser(user);

    dispatch(addUserSuccess(data));
  } catch ({ name, message }) {
    dispatch(addUserError({ name, message }));
  }
};

const editUser = (id, user) => async dispatch => {
  dispatch(editUserRequest());

  try {
    const { data } = await api.editUser(id, user);

    dispatch(editUserSuccess(data));
  } catch ({ name, message }) {
    dispatch(editUserError({ name, message }));
  }
};

const deleteUser = id => async dispatch => {
  dispatch(deleteUserRequest());

  try {
    await api.deleteUser(id);

    dispatch(deleteUserSuccess(id));
  } catch ({ name, message }) {
    dispatch(deleteUserError({ name, message }));
  }
};

const usersOperations = {
  getAllUsers,
  addUser,
  editUser,
  deleteUser,
};
export default usersOperations;