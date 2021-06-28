import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { Form } from 'react-bootstrap';

const ContactSection = ({ project, hasConfirmed }) => {
  const { orgEmail, projectTitle, pmEmail } = project;

  const template = ({ orgName, projectTitle, pmEmail }) => {
    return `Hello ${orgName},\n
My name is [Name] and I am a [developer/designer/etc.]. I am reaching out to you because I found your "${projectTitle}" project listing on the Build for Black Lives website. [I/My teammates and I (CC’ed)]would love to offer our [design/programming/ etc.] skills to help work on your project pro-bono.\n
[Please remember to include information such as who you or your team is, your background and experience, and any questions you may have about the project, logistical or otherwise.]\n
Please feel free to look at examples of my work at [portfolio link]. Thank you very much and I hope to work with you soon!\n
Best,
[Name]`;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'volunteer_contact_form', e.target, process.env.EMAILJS_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div>
      <div className={hasConfirmed ? 'title-container' : ''}>
        <h3>Contact Information</h3>
        {hasConfirmed ? (
          <>
            {orgEmail && <p>Organization Email: {orgEmail}</p>}
            {pmEmail && <p> Project Manager Email: {pmEmail}</p>}
          </>
        ) : (
          <p className="mb-0">Please agree to the anti-racism commitment in step 1 to view contact information</p>
        )}
      </div>
      {hasConfirmed && (
        <div>
          <div className="info-container">
            <h4>Email Template</h4>
            <p>
              This is a sample email template that you may use to contact the client and, if applicable, the project
              manager. If you wish to use it, please modify the information within the brackets in order to tailor it to
              the project and client. If you are in a team, be sure to include them in the email as well.
            </p>
            <Card className="project-detail-email">
              <Form className="contact-form" onSubmit={sendEmail}>
                <Form.Group controlId="form_user_name">
                  <Form.Label>Name(s)</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="form_user_email">
                  <Form.Label>Email address(es)</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group controlId="form_message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={15} defaultValue={template(project)} />
                </Form.Group>
                <div className="bottom-button-container">
                  <Button className="secondary-button" type="submit">
                    Send Email
                  </Button>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
