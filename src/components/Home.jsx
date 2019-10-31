import React from "react";
import Typography from '@material-ui/core/Typography';

const Home = () => {

  return (
    <div className="home">

      <Typography variant="h4" component="h4">
        Welcome!
      </Typography>
      <p>
        Notes:
      </p>

      <hr />

      <p>
        Here's's what I did...
      </p>

      <Typography variant="h6">
        Get started here.
      </Typography>

      <p>
        View the list of contacts and add a new contact <a href='/contacts'>HERE</a>
      </p>

      <hr />

      <Typography variant="h6">
        Hooks and Components
      </Typography>

      <p>
        I used functional components with hooks. In particular,  useState, useEffect and the useParams router hook.
        There is minimal error checking when creating a new contact.
      </p>

      <hr />

      <Typography variant="h6">
        API Service for Data Management
      </Typography>

      <p>
        I wrote an API that does what an API should do:
        <ul>
          <li>Returns a collection of contacts</li>
          <li>Return a contact given an Id</li>
          <li>Updates a contact given an Id</li>
          <li>Delete a contact given an Id</li>
        </ul>

        The data does not persist of course.
      </p>

      <hr />

      <Typography variant="h6">
        Routing
      </Typography>

      <p>
        I implemented the react router.  It has 3 routes:
        <ul>
          <li>'/' - This page</li>
          <li>/contacts - The list of contacts -- you can add (and delete) a contact here</li>
          <li>/contacts/:id - The update page.  Given an Id, it displays and updates the record.</li>
        </ul>
      </p>

      <hr />

      <Typography variant="h6">
        Material Design
      </Typography>

      <p>
        I used Material Design for input fields, buttons and the navbar.
      </p>




    </div>
  )
}

export default Home;