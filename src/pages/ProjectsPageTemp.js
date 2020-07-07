import React from 'react';

const ProjectsPageTemp = () => (
  <div class="container mt-5">
    <div class="row text-center">
      <div class="col"></div>
      <div class="col-8">
        <h1 class="mt-5">Projects Coming Soon</h1>
        <h4 class="text-white mb-5">Stay tuned for our first projects!</h4>
      </div>
      <div class="col"></div>
    </div>

    <hr class="solid" />

    <div class="row d-flex justify-content-center text-center">
      <div class="col-4">
        <h6 class="mt-5 text-white"> Want to be notified? Enter your email below: </h6>
        <input type="email" class="form-control" aria-describedby="email" placeholder="foo.bar@gmail.com" />
        <button type="submit" class="btn btn-primary mt-3">
          Submit
        </button>
      </div>
    </div>
  </div>
);

export { ProjectsPageTemp };
