import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './users/usersReducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
