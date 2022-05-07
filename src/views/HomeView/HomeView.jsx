// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

import routes from '../../routes';
import css from './HomeView.module.scss';
import Container from '../../components/Container';

const HomeView = () => {
  //   const dispatch = useDispatch();

  // useEffect(() => {
  // }, []);

  return (
    <Container>
      <h1 className={css.title}>User Admin</h1>

      <div className={css.actions}>
        <Link component={Link} to={routes.addUser}>
          Add user
        </Link>
      </div>
    </Container>
  );
};

export default HomeView;
