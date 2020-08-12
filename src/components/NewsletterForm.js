import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useMailChimpForm } from 'use-mailchimp-form';

import '../styling/NewsletterForm.css';

const NewsletterForm = () => {
  const url =
    'https://buildforblacklives.us10.list-manage.com/subscribe/post?u=17ef068e7219cec515c8dfe19&amp;id=d0d5155f5d';
  const { loading, error, success, message, handleSubmit } = useMailChimpForm(url);
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ EMAIL: email });
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const displayMessage = () => {
    if (loading) {
      return 'Submitting...';
    }

    if (error) {
      if (message.includes('already subscribed')) {
        return "You're already subscribed.";
      }
      return 'Please enter a valid email.';
    }

    if (success) {
      return 'Thank you for subscribing!';
    }

    return '';
  };

  return (
    <div className="newsletter-form">
      <form onSubmit={handleFormSubmit}>
        <div className="form-container">
          <input type="email" value={email} name="email" placeholder="Email" onChange={handleEmailChange} />
          <Button type="submit" className="primary-button" aria-disabled="false" size="sm">
            Subscribe
          </Button>
        </div>
        <div className={`newsletter-msg ${error ? 'newsletter-msg-error' : ''}`}>
          {displayMessage()}
        </div>
      </form>
    </div>
  );
};

export default NewsletterForm;
