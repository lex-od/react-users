import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate, useParams } from 'react-router';

import routes from '../../routes';
import { usersOps, usersSls } from '../../redux/users';
import css from './UserView.module.scss';
import Container from '../../components/Container';
import UserForm from '../../components/UserForm';

const UserView = () => {
  // Если есть editUserMatch - редактирование, иначе - добавление
  const editUserMatch = useMatch(routes.editUser);
  // id юзера, для случая редактирования
  const { userId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const listPending = useSelector(usersSls.getListPending);
  const listError = useSelector(usersSls.getListError);
  const editedUser = useSelector(state => usersSls.getUserById(state, userId));

  const formInitValues = useMemo(() => {
    if (!editedUser) return null;

    const { name, surname, descr } = editedUser;

    return { name, surname, descr };
  }, [editedUser]);

  const handleFormSubmit = useCallback(
    async newUser => {
      if (editUserMatch) {
        await dispatch(usersOps.editUser(userId, newUser));
      } else {
        await dispatch(usersOps.addUser(newUser));
      }

      // При ошибке не переходим на главную
      navigate(routes.home);
    },
    [editUserMatch, userId, dispatch, navigate],
  );

  const isLoadSuccess = !listPending && !listError;
  const isCorrectFormData = (editUserMatch && editedUser) || !editUserMatch;

  const isShowUserNotFound = isLoadSuccess && editUserMatch && !editedUser;
  const isShowUserForm = isLoadSuccess && isCorrectFormData;

  return (
    <Container>
      <h1 className={css.pageTitle}>{editUserMatch ? 'Edit' : 'Add'} User</h1>

      {listPending && <p className={css.spinner}>Loading...</p>}

      {!listPending && listError && (
        <p className={css.eror}>
          {listError.name}. {listError.message}
        </p>
      )}

      {isShowUserNotFound && (
        <p className={css.noItems}>User with id {userId} not found</p>
      )}

      {isShowUserForm && (
        <UserForm initValues={formInitValues} onSubmit={handleFormSubmit} />
      )}
    </Container>
  );
};

export default UserView;
