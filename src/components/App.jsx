import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './ContactForm/ContactForm.module.css'


const App = () => {
  const storedContacts = localStorage.getItem('contacts');
  const initialContacts = storedContacts ? JSON.parse(storedContacts) : [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const filterContacts = (event) => {
    setFilter(event.currentTarget.value);
  };

  const addContact = (newContact) => {
    if (contacts.find((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteClick = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm addContact={addContact} />
        <h2 className={css.title}>Contact</h2>
        <Filter onChange={filterContacts} value={filter} />
        <ContactList contacts={filteredContacts} onClick={handleDeleteClick} />
      </div>
    </>
  );
};

export default App;