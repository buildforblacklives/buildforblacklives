import React from 'react';

const Template = ({ orgName, projectTitle }) => (`
  Hello ${orgName},\n\n
  My name is [...] and I am a [...]. I am reaching out to you because I found your ${projectTitle} project listing on the Build for Black Lives project website. My teammates (CC'd) and I would love to offer our [design/programming etc] skills to help work on your project pro-bono.\n\n
  <Please remember to include information such as who your team is, what your background and experience is, and any questions you may have about the project, logistical or otherwise>\n\n
  Please feel free to look at examples of my work at [portfolio link]. You can contact me at [your email] or [your phone number]. Thank you very much and I hope to work with you soon!\n\n
  Best,\n
  [Your name]
  `)

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
      {hasConfirmed ?
        <>
          {orgEmail && <p>Email: {orgEmail}</p>}
          {orgPhone && <p> Phone number: {orgPhone}</p>}
          <h3>Email template</h3>
          <div className="confirmation-btn-container">
            <button
              class="btn btn-light copy-button"
              onClick={copyEmail}>
              Copy template
          </button>
          </div>
          <div className="project-detail-email">{emailContent}</div>
        </>
        :
        <p>Please agree to the anti-racism commitment in step 1 to view contact information</p>
      }
    </div>
  )
}

export default ContactSection