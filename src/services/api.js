import axios from 'axios';

const getAllUsers = () => {
  return axios.get('http://23.88.43.148/users');
};

const addUser = user => {
  return axios.post('http://23.88.43.148/users', user);
};

const editUser = (id, user) => {
  return axios.put(`http://23.88.43.148/user/${id}`, user);
};

const deleteUser = (id, user) => {
  return axios.delete(`http://23.88.43.148/user/${id}`);
};

const api = {
  getAllUsers,
  addUser,
  editUser,
  deleteUser,
};
export default api;
