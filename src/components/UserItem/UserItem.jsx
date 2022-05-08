import css from './UserItem.module.scss';

const UserItem = ({ user }) => {
  const { name, surname, descr } = user;

  return (
    <li className={css.userItem}>
      <p className={css.name}>{name}</p>

      <p className={css.surname}>{surname}</p>

      <p className={css.description}>{descr}</p>
    </li>
  );
};

export default UserItem;
