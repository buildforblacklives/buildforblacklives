import React, { useState, useEffect } from 'react';

const ConfirmationCheckModal = ({
  confirmationChecks,
  setConfirmationChecks,
  canCloseModal,
  setShowConfirmation}) => (
  <div className="confirmation-checks-modal-base">
    <div className="confirmation-checks-modal">
      <h2>Before you take on this project</h2>
      <p>
        placeholder for history of tech and design and importance of being anti-racist
      </p>
      <p>
        Please read and check off the following checkboxes to acknowledge your agreement with and commitment to the following statements:
      </p>
      <label>
        <input
          name="confirm0"
          type="checkbox"
          checked={confirmationChecks[0]}
          onChange={() =>
            setConfirmationChecks([!confirmationChecks[0], confirmationChecks[1], confirmationChecks[2]])
          }
        />
        <span className="confirmation-checks-text">
          I am committed to listening to the needs of the team I am working for, and building what they ask rather than assuming I know what is best.
        </span>
      </label>
      <label>
        <input
          name="confirm1"
          type="checkbox"
          checked={confirmationChecks[1]}
          onChange={() =>
            setConfirmationChecks([confirmationChecks[0], !confirmationChecks[1], confirmationChecks[2]])
          }
        />
        <span className="confirmation-checks-text">
          I am committed to listening to the needs of the team I am working for, and building what they ask rather than assuming I know what is best.
        </span>
      </label>
      <label>
        <input
          name="confirm2"
          type="checkbox"
          checked={confirmationChecks[2]}
          onChange={() =>
            setConfirmationChecks([confirmationChecks[0], confirmationChecks[1], !confirmationChecks[2]])
          }
        />
        <span className="confirmation-checks-text">
          I am committed to listening to the needs of the team I am working for, and building what they ask rather than assuming I know what is best.
        </span>
      </label>
      <div className="confirmation-btn-container">
        <button
          type="button"
          class="btn btn-light confirmation-btn"
          disabled={!canCloseModal}
          onClick={() => setShowConfirmation(false)}>
          Confirm
        </button>
      </div>
    </div>
  </div>
)

/*
Assumes project object shape is:
{
  orgName: str,
  orgAbout: str,
  orgEmail: str,
  orgPhone: str,
  projectAbout: str,
  projectTime: str, (??)
}
*/

// example project, delete this later
const example = {
  orgName: "Hack Beanpot",
  orgAbout: "this is what our org does",
  orgEmail: "team@hbp.com",
  orgPhone: null,
  projectAbout: "This is what the project is about",
  projectTime: "Estimated 2 weeks"
}

const ProjectWorkPage = ({ match }) => {
  const { projectId } = match.params;
  const [confirmationChecks, setConfirmationChecks] = useState([false, false, false]);
  const [canCloseModal, setCanCloseModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(true);

  useEffect(() => {
    if (confirmationChecks.every((check) => check)) {
      setCanCloseModal(true);
    }
  }, [confirmationChecks])
  // TODO add useeffect to fetch project details based on project id
  const project = example;
  const { orgName, orgAbout, orgEmail, orgPhone, projectAbout, projectTime } = project;

  return (
    <div className="project-work-page">
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col-8">
            <div className="project-work-flow">
              <h1>Work on this project</h1>
              <p>some copy about working on the project and workflow images that i'll steal from cari</p>
            </div>

            <div className="project-details-section">
              <h1>Project description</h1>
              <p className="project-org-name">{orgName}</p>
              
              <div className="project-detail-title">About the organization</div>
              <p className="project-detail-content">{orgAbout}</p>
              <div className="project-detail-title">About the project</div>
              <p className="project-detail-content">{projectAbout}</p>
              <div className="project-detail-title">Project timeline</div>
              <p className="project-detail-content">{projectTime}</p>
            </div>

            <h1>Email template</h1>
          </div>
          <div className="col"></div>
        </div>
      </div>
      {showConfirmation &&
        <ConfirmationCheckModal
          confirmationChecks={confirmationChecks}
          setConfirmationChecks={setConfirmationChecks}
          canCloseModal={canCloseModal}
          setShowConfirmation = {setShowConfirmation}
        />}
    </div>
  );
}

export { ProjectWorkPage };
