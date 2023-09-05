import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { statusFilters } from '../../redux/constans';
import { getStatusFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/actions';

import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const hadleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => hadleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => hadleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.complited}
        onClick={() => hadleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
