import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';

import routes from '../routes';
import { usersOps } from '../redux/users';
import './App.module.scss';
import { HomeView, UserView } from '../views';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersOps.getAllUsers());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={routes.home} element={<HomeView />} />

      <Route path={routes.addUser} element={<UserView />} />

      <Route path={routes.editUser} element={<UserView />} />

      <Route path="/*" element={<Navigate to={routes.home} replace />} />
    </Routes>
  );
};

export default App;
