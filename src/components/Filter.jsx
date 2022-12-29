import { useSelector, useDispatch } from 'react-redux';
import { filterContacts, getContacts } from '../redux';
import css from './App.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  function onFilterChange(event) {
    const name = event.currentTarget.value;
    dispatch(filterContacts(name));
  }

  return (
    <div className={css.formFilter}>
      <label className={css.formLabel}>
        Find contacts by name
        <input
          className={css.formInput}
          name="filter"
          onChange={onFilterChange}
        ></input>
      </label>
      <div>Total contacts: {contactList.length}</div>
    </div>
  );
};
