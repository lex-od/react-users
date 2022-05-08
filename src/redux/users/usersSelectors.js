import { createSelector } from '@reduxjs/toolkit';

import { PAGE_SIZE } from './usersReducer';

const getAllUsers = state => state.users.list;

const getListPending = state => state.users.listPending;

const getListError = state => state.users.listError;

const getCurrentPage = state => state.users.currentPage;

const getPageCount = state => {
  const userCount = getAllUsers(state).length;

  return Math.max(Math.ceil(userCount / PAGE_SIZE), 1);
};

const getCurrentPageUsers = createSelector(
  [getAllUsers, getCurrentPage],
  (allUsers, currentPage) => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;

    return allUsers.slice(startIndex, startIndex + PAGE_SIZE);
  },
);

const usersSelectors = {
  getAllUsers,
  getListPending,
  getListError,
  getCurrentPage,
  getPageCount,
  getCurrentPageUsers,
};
export default usersSelectors;
