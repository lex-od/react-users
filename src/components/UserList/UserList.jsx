import { useSelector } from 'react-redux';
import { usersSls } from '../../redux/users';
import css from './UserList.module.scss';

const UserList = () => {
  const userPage = useSelector(usersSls.getCurrentPageUsers);

  return (
    <div className={css.userList}>
      <ul className={css.list}></ul>
    </div>
  );
};

export default UserList;
