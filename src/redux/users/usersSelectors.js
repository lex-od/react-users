import { createSelector } from '@reduxjs/toolkit';

const getAllUsers = state => state.users.list;

const getListPending = state => state.users.listPending;

const getListError = state => state.users.listError;

const getCurrentPage = state => state.users.currentPage;

const getPageCount = state => {
  //
};

const getCurrentPageUsers = createSelector(
  [getAllUsers, getCurrentPage],
  (allUsers, currentPage) => {
    //
  },
);

const usersSelectors = {
  getAllUsers,
  getListPending,
  getListError,
  getCurrentPage,
  getCurrentPageUsers,
};
export default usersSelectors;
