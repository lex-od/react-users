import { Navigate, Route, Routes } from 'react-router';

import routes from '../routes';
import './App.module.scss';
import { HomeView } from '../views';

const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<HomeView />} />

      <Route path={routes.addUser} />

      <Route path={routes.editUser} />

      <Route path="/*" element={<Navigate to={routes.home} replace />} />
    </Routes>
  );
};

export default App;
