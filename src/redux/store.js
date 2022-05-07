import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    users: state => null,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
