import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Template = ({ orgName, projectTitle, pmEmail }, textType) => {
  let newline = textType === 'uri' ? '%0d%0a%0d%0a' : '\n';

  return `
Hello ${orgName},${newline}
My name is [your name] and I am a [developer/designer/etc.]. I am reaching out to you because I found your "${projectTitle}" project listing on the Build for Black Lives website. [I/My teammates and I (CC’ed)] would love to offer our [design/programming/ etc.] skills to help work on your project pro-bono.${newline}
[Please remember to include information such as who you or your team is, your background and experience, and any questions you may have about the project, logistical or otherwise.]${newline}
Please feel free to look at examples of my work at [portfolio link]. You can contact me at [your email] or [your phone number]. Thank you very much and I hope to work with you soon!${newline}
Best,${newline}
[Your name]
`;
};

const ContactSection = ({ project, hasConfirmed }) => {
  const { orgEmail, projectTitle, pmEmail } = project;
  const emailContent = Template(project);

  const defaultCopyButtonText = 'Copy Email Template';
  const [copyButtonText, setCopyButtonText] = useState(defaultCopyButtonText);

  const copyEmail = () => {
    var textArea = document.createElement('textarea');
    textArea.value = emailContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopyButtonText('Copied!');
    setTimeout(() => {
      setCopyButtonText(defaultCopyButtonText);
    }, 1500);
  };

  const openMailClient = () => {
    const subjectLine = `Interest In Project: ${projectTitle}`;
    const body = Template(project, 'uri');
    window.location.href = pmEmail
        ? `mailto:${orgEmail}?cc=${pmEmail}&subject=${subjectLine}&body=${body}`
        : `mailto:${orgEmail}?subject=${subjectLine}&body=${body}`;
  };

  const ContactEmailTemplate = () => (
    <div>
      <div className="info-container">
        <h4>Email Template</h4>
        <p>
          This is a sample email template that you may use to contact the client and, if applicable, the project manager. If you wish to use it, please modify
          the information within the brackets in order to tailor it to the project and client. If you are in a team, be
          sure to include them in the email as well.
        </p>
      </div>
      <Card className="project-detail-email">
        <div className="buttons-container">
          <Button className="secondary-button" onClick={copyEmail}>
            <i className="far fa-copy" aria-hidden="true"></i>
            {copyButtonText}
          </Button>
          <Button className="secondary-button" onClick={openMailClient}>
            <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
            Open in Mail Client
          </Button>
        </div>
        <div>{emailContent}</div>
      </Card>
    </div>
  );

  return (
    <div>
      <div className={hasConfirmed ? 'title-container' : ''}>
        <h3>Contact Information</h3>
        {hasConfirmed ? (
          <>{orgEmail && <p>Organization Email: {orgEmail}</p>}
          {pmEmail && <p> Project Manager Email: {pmEmail}</p>}</>
        ) : (
          <p className="mb-0">Please agree to the anti-racism commitment in step 1 to view contact information</p>
        )}
      </div>
      {hasConfirmed && <ContactEmailTemplate />}
    </div>
  );
};

export default ContactSection;
