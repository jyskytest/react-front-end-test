import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { getContactById } from '../ioUtils/ioUtils';

/**
 * This component is wrapped in a HOC (withRouter)
 */
const Contact = (props) => {
  const { id } = useParams();
  const contact = getContactById(id);
  alert(contact.name)
  const [editMode, setEditMode] = useState(false);

  const getFriendlyDate = date => {
    return new Date(date).toUTCString();
  }

  const doCancel = () => {

    props.history.goBack();

  }

  /**
   * Get the name and email address
   */
  const doUpdate = () => {
    setEditMode(!editMode);
  }


  return (
    <div class="contactDetail">
      <Card>
        <CardContent>

          <Typography variant="h5" component="h2">
            <TextField label="Name" value={contact.name} />
          </Typography>

          <Typography>
            <TextField label="eMail Address" value={contact.emailAddress} />
          </Typography>


          <Typography>
            Created: {getFriendlyDate(contact.dateCreated)}
          </Typography>

          <Typography>
            Updated: {getFriendlyDate(contact.dateUpdated)}
          </Typography>

        </CardContent>

        <CardActions>
          <Button onClick={doUpdate} size="small">Update</Button>
          <Button onClick={doCancel} size="small">Cancel</Button>
        </CardActions>
      </Card>
    </div>

  )
}

export default withRouter(Contact);