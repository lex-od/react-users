import { useSelector } from 'react-redux';

import { usersSls } from '../../redux/users';
import css from './UserList.module.scss';
import Pagination from '../Pagination';
import UserItem from '../UserItem/UserItem';

const UserList = () => {
  const userPage = useSelector(usersSls.getCurrentPageUsers);

  return (
    <div className={css.userList}>
      <Pagination />

      <ul className={css.list}>
        {userPage.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
