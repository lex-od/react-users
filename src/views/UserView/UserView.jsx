import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import routes from '../../routes';
import { usersOps, usersSls } from '../../redux/users';
import css from './UserView.module.scss';
import Container from '../../components/Container';
import UserForm from '../../components/UserForm';

const UserView = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  // const user = useSelector(state => usersSls.getUserById(state, userId));

  const handleEditUser = editedUser => {
    // dispatch(usersOps.editUser(editedUser));
    // history.push(routes.home);
  };

  return (
    <Container>
      <h1 className={css.pageTitle}>Add/Edit User</h1>

      <UserForm onSubmit={handleEditUser} />
    </Container>
  );
};

export default UserView;
