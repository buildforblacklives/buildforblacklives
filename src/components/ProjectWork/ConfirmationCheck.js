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
        diversity in the teams that create these products. Racial inequalities in tech are perpetuated through cases
        such as product design, tokenism hires, and the lack of Black professionals holding leadership positions in
        large companies. To participate in the Build for Black Lives initiative, it is critical to be consciously
        anti-racist and to create work and participate in this process in a way that actively supports and empowers
        black people. Be willing to listen, be respectful and empathetic of your project owners’ needs, and trust in the
        voices of the people you are working with and seek to empower their message rather than your own. For allies, it
        is essential to question your intentions. Remove yourself from the center of the narrative and be aware of how
        you're able to enter and exit from the conversation of Black socioeconomic and public health disparities.
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
          onChange={() =>
            setConfirmationChecks([
              !confirmationChecks[0],
              confirmationChecks[1],
              confirmationChecks[2],
              confirmationChecks[3],
              confirmationChecks[4],
              confirmationChecks[5],
              confirmationChecks[6]
            ])
          }
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
          onChange={() =>
            setConfirmationChecks([
              confirmationChecks[0],
              !confirmationChecks[1],
              confirmationChecks[2],
              confirmationChecks[3],
              confirmationChecks[4],
              confirmationChecks[5],
              confirmationChecks[6]
            ])
          }
        />
        <span className="confirmation-checks-text">I am committed to being anti-racist online and in person.</span>
      </label>
      <label>
        <input
          name="confirm2"
          type="checkbox"
          checked={confirmationChecks[2]}
          disabled={hasConfirmed}
          onChange={() =>
            setConfirmationChecks([
              confirmationChecks[0],
              confirmationChecks[1],
              !confirmationChecks[2],
              confirmationChecks[3],
              confirmationChecks[4],
              confirmationChecks[5],
              confirmationChecks[6]
            ])
          }
        />
        <span className="confirmation-checks-text">
          I will refrain from giving my client the burden of educating myself on systemic oppression.
        </span>
      </label>
      <label>
        <input
          name="confirm1"
          type="checkbox"
          checked={confirmationChecks[3]}
          disabled={hasConfirmed}
          onChange={() =>
            setConfirmationChecks([
              confirmationChecks[0],
              confirmationChecks[1],
              confirmationChecks[2],
              !confirmationChecks[3],
              confirmationChecks[4],
              confirmationChecks[5],
              confirmationChecks[6]
            ])
          }
        />
        <span className="confirmation-checks-text">
          I am committed to continuously learn about systemic racism, in addition to the racial inequalities within the
          Tech and Design industry.
        </span>
      </label>
      <label>
        <input
          name="confirm1"
          type="checkbox"
          checked={confirmationChecks[4]}
          disabled={hasConfirmed}
          onChange={() =>
            setConfirmationChecks([
              confirmationChecks[0],
              confirmationChecks[1],
              confirmationChecks[2],
              confirmationChecks[3],
              !confirmationChecks[4],
              confirmationChecks[5],
              confirmationChecks[6]
            ])
          }
        />
        <span className="confirmation-checks-text">
          I am committed to offering my skill set(s) pro bono during the entire duration of this project.
        </span>
      </label>
      <label>
        <input
          name="confirm1"
          type="checkbox"
          checked={confirmationChecks[5]}
          disabled={hasConfirmed}
          onChange={() =>
            setConfirmationChecks([
              confirmationChecks[0],
              confirmationChecks[1],
              confirmationChecks[2],
              confirmationChecks[3],
              confirmationChecks[4],
              !confirmationChecks[5],
              confirmationChecks[6]
            ])
          }
        />
        <span className="confirmation-checks-text">
          I am committed to supporting the intersectionality of anti-racism efforts.
        </span>
      </label>
      <label>
        <input
          name="confirm1"
          type="checkbox"
          checked={confirmationChecks[6]}
          disabled={hasConfirmed}
          onChange={() =>
            setConfirmationChecks([
              confirmationChecks[0],
              confirmationChecks[1],
              confirmationChecks[2],
              confirmationChecks[3],
              confirmationChecks[4],
              confirmationChecks[5],
              !confirmationChecks[6]
            ])
          }
        />
        <span className="confirmation-checks-text">
          I am committed to ensuring that the entire duration of this project development and communication efforts
          remain a safe space for all parties involved.
        </span>
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
