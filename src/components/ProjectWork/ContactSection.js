import React from 'react';
import Template from './workEmailTemplate';

const ContactSection = ({ project, hasConfirmed }) => {
  const emailContent = Template(project);
  const { orgPhone, orgEmail } = project;
  
  const copyEmail = () => {
    var textArea = document.createElement("textarea");
    textArea.value = emailContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  return (
    <div>
      <h3>Contact information</h3>
      {!hasConfirmed && <p>Please agree to the anti-racism commitment in step 1 to view contact information</p>}
      {orgEmail && hasConfirmed && <p>Email: {orgEmail}</p>}
      {orgPhone && hasConfirmed && <p> Phone number: {orgPhone}</p>}
      <h3>Email template</h3>
      <div className="confirmation-btn-container">
        <button
          class="btn btn-light copy-button"
          onClick={copyEmail}>
          Copy template
        </button>
      </div>
      <div className="project-detail-email">{emailContent}</div>
    </div>
  )
}

export default ContactSection
