import { Link } from 'react-router-dom';

import routes from '../../routes';
import css from './UserActions.module.scss';

const UserActions = () => {
  return (
    <div className={css.userActions}>
      <Link to={routes.addUser}>Add user</Link>
    </div>
  );
};

export default UserActions;
