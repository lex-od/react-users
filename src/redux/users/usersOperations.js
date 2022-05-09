import { api } from '../../services';
import usersActs from './usersActions';
import usersSls from './usersSelectors';

const {
  getAllUsersRequest,
  getAllUsersSuccess,
  getAllUsersError,
  setPrevPage,
  addUserRequest,
  addUserSuccess,
  addUserError,
  editUserRequest,
  editUserSuccess,
  editUserError,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserError,
} = usersActs;

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
  } catch (error) {
    const { name, message } = error;
    dispatch(addUserError({ name, message }));

    throw error;
  }
};

const editUser = (id, user) => async dispatch => {
  dispatch(editUserRequest());

  try {
    const { data } = await api.editUser(id, user);

    dispatch(editUserSuccess(data));
  } catch (error) {
    const { name, message } = error;
    dispatch(editUserError({ name, message }));

    throw error;
  }
};

const deleteUser = id => async (dispatch, getState) => {
  dispatch(deleteUserRequest());

  try {
    await api.deleteUser(id);

    dispatch(deleteUserSuccess(id));

    const state = getState();
    const currentPage = usersSls.getCurrentPage(state);
    const pageCount = usersSls.getPageCount(state);

    if (currentPage > pageCount) {
      dispatch(setPrevPage());
    }
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
