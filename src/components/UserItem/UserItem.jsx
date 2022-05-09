import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { usersOps, usersSls } from '../../redux/users';
import css from './UserItem.module.scss';

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const actionsPending = useSelector(usersSls.getActionsPending);

  const { id, name, surname, descr } = user;

  const handleDelete = () => {
    dispatch(usersOps.deleteUser(id));
  };

  return (
    <li className={css.userItem}>
      <p className={css.name}>{name}</p>

      <p className={css.name}>{surname}</p>

      <p className={css.description}>{descr}</p>

      <div className={css.actions}>
        <Link className={css.editLink} to={`/users/edit/${id}`}>
          Edit
        </Link>

        <button
          className={css.deleteButton}
          type="button"
          onClick={handleDelete}
          disabled={actionsPending}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default UserItem;
