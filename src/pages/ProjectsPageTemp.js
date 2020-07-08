import React from 'react';
import '../styling/ProjectsPageTemp.css';
import logo from '../assets/email-icon.png';

const ProjectsPageTemp = () => (
  <div class="container mt-5">
    <div class="row text-center">
      <div class="col"></div>
      <div class="col-8">
        <h1 class="mt-5">Projects Coming Soon</h1>
        <h4 class="mb-5">Stay tuned for upcoming projects!</h4>
                 <p> We are in the process of reviewing projects and will be posting projects shortly.
                        <br/> Check back in a couple weeks to see what projects have been added.</p>
      </div>
      <div class="col"></div>
    </div>

    <div class="row d-flex justify-content-center text-center">
      <div class="col-4">
        <img src={logo} width="40" class="mt-5 mb-3"/>
        <h5> Want to be notified?</h5>

        <a href="http://eepurl.com/g9JPtn" target="_blank" class="btn button btn-lg" aria-disabled="false"> Subscribe Here </a>

    </div>
  </div>
  </div>
);

export { ProjectsPageTemp };
