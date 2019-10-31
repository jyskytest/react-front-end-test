import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {
  Link
} from "react-router-dom";
import { addContactToDB, deleteContactFromDB, getContacts } from '../ioUtils/ioUtils';

const ContactContainer = () => {

  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setContacts(getContacts());
    setIsLoading(false);
  }, [])

  /**
   * Can we create?
   */
  const canCreate = () => {
    if (Object.keys(contact).length === 0) {
      return false;
    }
    return true;
  }

  /**
   * Simple email check
   */
  const isEmailValid = () => {
    if (!contact.emailAddress) {
      return false;
    }

    if (contact.emailAddress.indexOf('@') < 0) {
      return false;
    }
    return true;
  }

  const addContact = async () => {
    if (!canCreate()) {
      alert("Please enter a name and email address.");
      return;
    }
    if (!isEmailValid()) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    const contacts = await addContactToDB(contact);
    setContact({})
    setContacts(contacts);
    setIsLoading(false);
  }

  /**
   * Delete a contact
   */
  const onDeleteContact = async (id) => {
    deleteContactFromDB(id);
    await setContacts(getContacts());
  }

  /**
   * Change contact field for new contact function
   */
  const changeContactField = (evt, fieldName) => {
    contact[fieldName] = evt.target.value;
    setContact(contact);
  }

  return (

    <div className="contactList">
      {isLoading &&
        <h1>Loading...</h1>
      }

      {!isLoading &&
        <div>
          <h2>Contacts...</h2>
          <TextField label="Name" onChange={((evt) => changeContactField(evt, 'name'))}
            value={contact.name}
            style={{ width: '200px' }}
            variant="standard" />

          <span class="marginLeft6" />

          <TextField label="eMail Address" onChange={((evt) => changeContactField(evt, 'emailAddress'))}
            value={contact.emailAddress}
            style={{ width: '300px' }}
            variant="standard" />

          <span class="marginLeft12" />

          <Button onClick={addContact} variant="contained" color="primary" >
            Add new contact
          </Button>

          <div className="contactDetails">
            Number of contacts {contacts.length}
            <div className="marginTop12"></div>
            {contacts.map((contact, index) => (
              <div key={index} className="contactEntry">
                <div id="name">
                  {contact.name}
                </div>

                <div id="email">
                  {contact.emailAddress}
                </div>

                <div id="link">
                  <Link to={`/contacts/${contact.id}`}>Edit</Link>
                  <Button onClick={() => onDeleteContact(contact.id)} size="small">Delete</Button>

                </div>
              </div>
            ))}


          </div>
        </div>
      }
    </div>
  )

}

export default ContactContainer;
