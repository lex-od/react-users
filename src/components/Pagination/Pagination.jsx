import { useDispatch, useSelector } from 'react-redux';

import { usersActs, usersSls } from '../../redux/users';
import css from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(usersSls.getCurrentPage);
  const pageCount = useSelector(usersSls.getPageCount);

  return (
    <div className={css.pagination}>
      <button
        className={css.prevButton}
        onClick={() => dispatch(usersActs.setPrevPage())}
        disabled={currentPage <= 1}
      >
        Prev
      </button>

      <p>
        Page {currentPage} of {pageCount}
      </p>

      <button
        className={css.nextButton}
        onClick={() => dispatch(usersActs.setNextPage())}
        disabled={currentPage >= pageCount}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
