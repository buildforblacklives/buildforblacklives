import React, { useState, useEffect } from 'react';

const ConfirmationCheck = ({ hasConfirmed, setHasConfirmed }) => {
  const [confirmationChecks, setConfirmationChecks] = useState([false, false, false]);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    if (confirmationChecks.every((check) => check)) {
      setAllChecked(true);
    }
  }, [confirmationChecks]);

  return (
    <div className="confirmation-checks-modal">
      <h4>Before you take on this project</h4>
      <p>
        The tech and design industries come with a history of discrimination and racism that persists today. This
        appears in products that are designed with racial bias and that exclude black communities, and in the lack of
        diversity in the teams that create these products. To participate in the Build for Black Lives intiative, it is
        critical to be consciously anti-racist and to create work and participate in this process in a way that actively
        supports and empowers black people. Be willing to listen, be respectful and empathetic of your project owners’
        needs, and trust in the voices of the people you are working with and seek to empower their message rather than
        your own.
      </p>
      <p>
        Please read and check off the following checkboxes to acknowledge your agreement with and commitment to the
        following statements:
      </p>
      <label>
        <input
          name="confirm0"
          type="checkbox"
          checked={confirmationChecks[0]}
          disabled={hasConfirmed}
          onChange={() => setConfirmationChecks([!confirmationChecks[0], confirmationChecks[1], confirmationChecks[2]])}
        />
        <span className="confirmation-checks-text">
          I am committed to listening to the needs of the team I am working for, and building what they ask rather than
          assuming I know what is best.
        </span>
      </label>
      <label>
        <input
          name="confirm1"
          type="checkbox"
          checked={confirmationChecks[1]}
          disabled={hasConfirmed}
          onChange={() => setConfirmationChecks([confirmationChecks[0], !confirmationChecks[1], confirmationChecks[2]])}
        />
        <span className="confirmation-checks-text">I am committed to</span>
      </label>
      <label>
        <input
          name="confirm2"
          type="checkbox"
          checked={confirmationChecks[2]}
          disabled={hasConfirmed}
          onChange={() => setConfirmationChecks([confirmationChecks[0], confirmationChecks[1], !confirmationChecks[2]])}
        />
        <span className="confirmation-checks-text">I am committed to</span>
      </label>
      <div className="confirmation-btn-container">
        <button
          type="button"
          class="secondary-button btn confirmation-btn"
          disabled={!allChecked || hasConfirmed}
          onClick={() => setHasConfirmed(true)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmationCheck;
