import React from 'react';
import { Button } from 'react-bootstrap';

const ProjectsPageTemp = () => (
  <div className="container mt-5 project-temp-page">
    <div className="row text-center">
      <div className="col-8 offset-2">
        <h1 className="mt-5">Projects Coming Soon</h1>
        <p className="mb-5">Stay tuned for our first projects!</p>
      </div>
    </div>

    <hr className="solid temp-hr" />

    <div className="row d-flex justify-content-center text-center">
      <div className="col-8">
        <p> Want to be notified? Enter your email below: </p>
        <input type="email" className="form-control mail-input" aria-describedby="email" placeholder="foo.bar@gmail.com" />
        <Button type="submit" className="secondary-button mt-3">
          Submit
        </Button>
      </div>
    </div>
  </div>
);

export { ProjectsPageTemp };
