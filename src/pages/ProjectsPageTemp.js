import React from 'react';

import NewsletterForm from '../components/NewsletterForm';
import '../styling/ProjectsPageTemp.css';

const ProjectsPageTemp = () => (
  <div className="container project-temp-page">
    <div className="row d-flex justify-content-center text-center">
      <div className="col-md-8">
        <h1>Projects Coming Soon</h1>
        <p className="mb-3">
          We are in the process of reviewing projects and will be posting projects shortly. Check back in a couple weeks
          to see newly added projects.
        </p>
        <NewsletterForm />
      </div>
    </div>
  </div>
);

export { ProjectsPageTemp };
