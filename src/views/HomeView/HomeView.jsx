import { useSelector } from 'react-redux';

import { usersSls } from '../../redux/users';
import css from './HomeView.module.scss';
import Container from '../../components/Container';
import UserList from '../../components/UserList';
import UserActions from '../../components/UserActions';

const HomeView = () => {
  const allUsers = useSelector(usersSls.getAllUsers);
  const listPending = useSelector(usersSls.getListPending);
  const listError = useSelector(usersSls.getListError);

  const isLoadSuccess = !listPending && !listError;
  const isShowNoItems = isLoadSuccess && !allUsers.length;
  const isShowUserList = isLoadSuccess && !!allUsers.length;

  return (
    <Container>
      <h1 className={css.title}>User Admin</h1>

      {listPending && <p className={css.infoText}>Loading...</p>}

      {!listPending && listError && (
        <p className={css.infoText}>
          {listError.name}. {listError.message}
        </p>
      )}

      {isShowNoItems && <p className={css.infoText}>No users found</p>}

      {isShowUserList && <UserList />}

      <UserActions />
    </Container>
  );
};

export default HomeView;
