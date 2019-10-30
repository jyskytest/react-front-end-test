import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


const Contact = props => {
  const [editMode, setEditMode] = useState(false);
  const { contact } = props;
  const getFriendlyDate = date => {
    return new Date(date).toUTCString();
  }

  const onEditMode = () => {
    setEditMode(!editMode);
  }

  return (
    <div>
      <Card>
        <CardContent>

          <Typography variant="h5" component="h2">
            Name: {editMode
              ? <TextField label="Name" onChange={((evt) => props.onUpdateContact(evt, 'name'))} value={contact.name} />
              : contact.name
            }
          </Typography>

          <Typography>
            eMailAddress: {contact.emailAddress}
          </Typography>

          {editMode &&
            <div>
              <Typography>
                Created: {getFriendlyDate(contact.dateCreated)}
              </Typography>

              <Typography>
                Updated: {getFriendlyDate(contact.dateUpdated)}
              </Typography>
            </div>
          }

        </CardContent>

        <CardActions>
          <Button onClick={onEditMode} size="small">Edit</Button>
          <Button onClick={() => props.onDeleteContact(contact)} size="small">Delete</Button>
        </CardActions>
      </Card>
    </div>

  )
}

export default Contact;