import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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

  const addContact = async () => {
    setIsLoading(true);
    const contacts = await addContactToDB(contact);
    setContact({})
    setContacts(contacts);
    setIsLoading(false);
  }

  const onDeleteContact = async (contact) => {
    deleteContactFromDB(contact);
    await setContacts(getContacts());
    alert('deleted...');
  }


  const changeContactField = (evt, fieldName) => {
    contact[fieldName] = evt.target.value;
    setContact(contact);
    //alert('changed..');
  }

  // updatecontactfield... uses id to get contact via filter...updates it and sets 
  // all contacts

  const isButtonDisabled = () => {
    //  const disabled = contact.firstName.length > 0
    //    && contact.lastName.length > 0
    //    && contact.emailAddress > 0;
    return false;
  }

  return (

    <div className="contactList">
      {isLoading &&
        <h1>Loading...</h1>
      }

      {!isLoading &&
        <div>
          <h2>Contacts...</h2>
          <TextField label="Name" onChange={((evt) => changeContactField(evt, 'name'))} value={contact.name} />
          <TextField label="eMail Address" onChange={((evt) => changeContactField(evt, 'emailAddress'))} value={contact.emailAddress} />

          <Button disabled={isButtonDisabled()} onClick={addContact} variant="contained" color="primary" >
            Add new contact
          </Button>

          <div className="contactDetails">
            Number of contacts {contacts.length}

            {contacts.map((contact, index) => (
              <div key={index} className="contactEntry">
                <div >
                  {contact.name}
                </div>

                <div>
                  <Link to={`/contacts/${contact.id}`}> Edit</Link>
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
