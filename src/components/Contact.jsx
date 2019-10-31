import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { getContactById, updateContact } from '../ioUtils/ioUtils';



/**
 * This component is wrapped in a HOC (withRouter)
 */
const Contact = (props) => {
  const { id } = useParams();
  const contact = getContactById(id);

  // Copy object for default purposes.
  const [editContact, setContact] = useState(JSON.parse(JSON.stringify(contact)));

  const getFriendlyDate = date => {
    return new Date(date).toUTCString();
  }

  /**
   * Use the router to go back
   */
  const doCancel = () => {
    props.history.goBack();
  }

  /**
   * Changed field.. Update state.
   * Note that setState in a hook will not rerender
   * if the reference is the same...
   * Create a new Object.
   *  
   * @param {*} evt 
   * @param {*} fieldName 
   */
  const changeContactField = (evt, fieldName) => {
    editContact[fieldName] = evt.target.value;
    const newStateObj = JSON.parse(JSON.stringify(editContact))
    setContact(newStateObj);
  }

  /**
   * Update contact store and go back via router
   */
  const doUpdate = () => {
    updateContact(editContact);
    props.history.goBack();
  }

  return (
    <div className="contactDetail">
      <h2>Contact card for {editContact.name}</h2>

      <Card>
        <CardContent>
          <div>
            <Typography variant="h5" component="h2">
              <TextField onChange={((evt) => changeContactField(evt, 'name'))}
                style={{ width: '200px' }}
                label="Name"
                value={editContact.name}
                variant="standard" />
            </Typography>
          </div>

          <div className="marginTop12">
            <Typography>
              <TextField onChange={((evt) => changeContactField(evt, 'emailAddress'))}
                style={{ width: '300px' }}
                label="eMail Address"
                value={editContact.emailAddress}
                variant="standard" />
            </Typography>
          </div>

          <div className="marginTop12">
            <Typography>
              Created: {getFriendlyDate(contact.dateCreated)}
            </Typography>
          </div>


          <div className="marginTop12">
            <Typography>
              Updated: {getFriendlyDate(contact.dateUpdated)}
            </Typography>
          </div>

        </CardContent>

        <CardActions>
          <div className="marginTop24">
            <Button onClick={doUpdate} size="small" variant="contained" color="primary">Update</Button>
            <Button onClick={doCancel} size="small">Cancel</Button>
          </div>
        </CardActions>
      </Card>
    </div>

  )
}

export default withRouter(Contact);