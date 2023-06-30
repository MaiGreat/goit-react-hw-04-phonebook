import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import css from './ContactForm.module.css'

const ContactForm = ({ addContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = evt => {
        const { value } = evt.target
        setName(value);
    }

    const handleNumberChange = evt => {
    const { value } = evt.target;
    setNumber(value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        const newContact = {
            id: nanoid(),
            name,
            number
        };
        addContact(newContact);
        setName('');
        setNumber('');
    }

        
    return (
        <div className={css["contact-forma"]}>
            <form onSubmit={handleSubmit}>
                <label className={css.form}>
                    Name
                    <input className={css["input-form"]}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className={css.form}>
                    Number
                    <input className={css["input-form"]}
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleNumberChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={css["btn-form"]} type="submit" >Add contact</button>
            </form>
        </div>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default ContactForm;