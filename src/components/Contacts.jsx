import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux';
import css from './App.module.css';

export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <p>
        {contact.name}: <span>{contact.phone}</span>
      </p>
      <button
        className={css.contactButton}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </>
  );
};
