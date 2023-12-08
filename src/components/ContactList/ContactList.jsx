import Contact from 'components/Contact/Contact';
import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFiltered, selectLoading } from '../../redux/selectors';
import Loader from 'components/Loader/Loader';

export default function ContactList() {
  const contacts = useSelector(selectFiltered);
  const isLoading = useSelector(selectLoading);

  return (
    <ul className={css.contactList}>
      {isLoading && <Loader />}
      {!isLoading &&
        contacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })}
    </ul>
  );
}
