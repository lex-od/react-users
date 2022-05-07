import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usersOps, usersSls } from '../../redux/users';
import css from './HomeView.module.scss';
import Container from '../../components/Container';
import UserList from '../../components/UserList';
import UserActions from '../../components/UserActions';

const HomeView = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(usersSls.getAllUsers);
  const listPending = useSelector(usersSls.getListPending);
  const listError = useSelector(usersSls.getListError);

  useEffect(() => {
    if (!allUsers) {
      dispatch(usersOps.getAllUsers());
    }
  }, []); // eslint-disable-line

  const isLoadSuccess = !listPending && !listError;
  const isShowNoItems = isLoadSuccess && !allUsers?.length;
  const isShowUserList = isLoadSuccess && !!allUsers?.length;

  return (
    <Container>
      <h1 className={css.title}>User Admin</h1>

      {listPending && <p className={css.spinner}>Loading...</p>}

      {!listPending && listError && <p className={css.eror}>Error!</p>}

      {isShowNoItems && <p className={css.noItems}>No users found</p>}

      {/* {isShowUserList && <UserList />} */}
      <UserList />

      <UserActions />
    </Container>
  );
};

export default HomeView;
