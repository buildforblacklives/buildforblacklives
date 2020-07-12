import React from 'react';
import { Link } from 'react-router-dom';

const FAQItems = {
  clientFAQ: [
    {
      question: 'Who is eligible for requesting a project?',
      answer: (
        <div>
          Organizations, institutions, and businesses (including shops or restaurants), as well as activist groups that
          are Black-owned/led, and/or primarily serve the Black community and/or support the Black Lives Matter
          movement. If you still have some questions, please email us at{' '}
          <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a> with the subject
          line: "[Project Request] Question".
        </div>
      )
    },
    {
      question: 'How do I submit a request for a project?',
      answer: (
        <div>
          You can submit your project details using the form in the <Link to="/project-request">Project Request</Link>{' '}
          page.
        </div>
      )
    },
    {
      question: 'What are the types of services that I can request?',
      answer:
        'We expect that most requests fall within the technology and design fields, such as website development and graphic design services; check out the project submission form for a breakdown of the different types of projects. If you’re still unsure of whether your request fits in any of the categories, leave a question at the end of your submission request, and we will get back to you as soon as we can.'
    },
    {
      question: 'How long do I have to wait until my request is approved?',
      answer:
        'Typically, your request will be approved and posted on the website within 3-5 business days at maximum. We will send you an email once your request has been posted on the website!'
    },
    {
      question: 'How many requests can I submit?',
      answer:
        'There are no limits on the number of requests, but we advise that each request is a self-contained project that at least one volunteer can complete.'
    },
    {
      question:
        'I would like to make changes to my submission, as I want to add more information/change some details/include a specific detail I missed before/update my contact information. How can I do this?',
      answer: (
        <div>
          Email us directly at{' '}
          <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a> with the subject
          line: "[Project Request] Change Project Request". In your email, please include the project title and
          requested changes. Please use the same email you used to submit the initial request so we can confirm that
          it’s you!
        </div>
      )
    },
    {
      question: 'How will I know if someone wants to work on my project?',
      answer:
        'Individuals interested in a project will connect with you using the contact information you provided in your project request, and will reach out to you to communicate work terms.'
    },
    {
      question:
        'How can I close my project request? A volunteer agreed to work on my project/I no longer have a need for a project request.',
      answer: (
        <div>
          Please email <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a> with
          the subject line: "[Project Request] Close Project Request". In your email, include the title of the request
          you would like to be taken down. Please use the same email that you used to submit the initial request form so
          we can confirm it’s you. We will archive your request within 3-5 business days at maximum, and the project
          post won’t be visible on our website anymore.
        </div>
      )
    },
    {
      question: 'Who should cover any expenses related to paid or optional features or services (eg. website domain, Facebook page promotions, etc.)?',
      answer:
        'Although volunteers are offering their services for free, any external paid features should be covered by the client. Remember that volunteers can help you research and find affordable options best suited to your needs!'
    },
    {
      question:
        'I’m having work-related issues with the volunteer(s) who agreed to take on my project. What should I do?',
      answer:
        'At this time, this platform is meant to connect volunteers to clients they would want to work with; we have minimal oversight on the communication and work process between volunteers and clients. If you’re unsatisfied with the service or would like to request additional changes, you are welcome to submit a new project request for other volunteers to take on.'
    },
    {
      question: 'I have some other questions. How can I contact you?',
      answer: (
        <div>
          For direct inquiries, email us at{' '}
          <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a> with the subject
          line: "[Project Request] Question".
        </div>
      )
    }
  ],
  volunteerFAQ: [
    {
      question: 'What are the conditions that need to be met before taking on a project?',
      answer: (
        <div>
          Build 4 Black Lives require all volunteers to agree to our anti-racism pledge, and to offer their requested
          services free of charge. We are an initiative that proudly supports the{' '}
          <a href="https://blacklivesmatter.com/">Black Lives Matter</a> movement, and requires that all projects are
          created in an anti-racist and anti-discriminatory way. If you are an ally who wants to learn more about
          building anti-racist technology, check out our 'Resources' page.
        </div>
      )
    },
    {
      question: 'I see a project that I would like to work on. How can I get in touch with the client?',
      answer:
        "Once you view a project you want to work on, click on the 'Work on this Project' button to view the client’s contact information; use this to personally reach out to them and communicate work terms."
    },
    {
      question:
        'I see a project that interests me, but I have some questions on the requirements and deliverables. Where can I find more information before committing to the project?',
      answer:
        "Feel free to contact the client personally to ask any questions before agreeing to work on their project; click on the 'Work on this Project' button to view the client’s contact information."
    },
    {
      question: 'Can more than one person work on a project?',
      answer:
        'If you would like to work in a group, find your group partner(s) before contacting a client. During the initial communication stages, one person can communicate with the client on the behalf of the group; once the group is officially working on the project, you may continue to collaborate and communicate together in the way that works best for you and the client.'
    },
    {
      question: 'Who should cover any expenses related to paid or optional features or services (eg. website domain, Facebook page promotions, etc.)?',
      answer:
        'Any external paid features should be covered by the client. As a volunteer, you can help with researching and finding affordable options that best suit the client’s needs.'
    },
    {
      question: 'I’m having work-related issues with the client I’m working for. What should I do?',
      answer:
        'At this time, this platform is meant to connect volunteers to clients they would want to work with; we have minimal oversight on the communication and work process between volunteers and clients. We advise volunteers to communicate and resolve any issues as best as they can with their clients.'
    },
    {
      question: 'I have some other questions. How can I contact you?',
      answer: (
        <div>
          For direct inquiries, email us at{' '}
          <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a> with the subject
          line: "[Volunteer] Question".
        </div>
      )
    }
  ],
  initiativeFAQ: [
    {
      question: 'Who is Build for Black Lives?',
      answer: (
        <div>
          Build for Black Lives is an initiative led by HackBeanpot, a 501(c)(3) Boston-based hackathon run by
          undergraduate students. This project was started in support of the Black Lives Matter movement and protests of
          June 2020. To learn more, visit our <Link to="/about">About Us</Link> page or at our hackathon website{' '}
          <a href="https://hackbeanpot.com/">hackbeanpot.com</a>.
        </div>
      )
    },
    {
      question: 'Who is HackBeanpot?',
      answer: (
        <div>
          HackBeanpot is an independently-run Boston hackathon for curious students, hackers, makers, and beginners. To learn more, visit our website{' '}
          <a href="https://hackbeanpot.com/">hackbeanpot.com</a>.
        </div>
      )
    },
    {
      question: 'How can I contact or partner with you?',
      answer: (
        <div>
          Reach out to us directly at{' '}
          <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a>. You can also visit
          our <Link to="/about">About Us</Link> page or see the footer at the bottom of the page to view our contact
          information. If you are an organization that wishes to partner with us and/or help spread the word on this initiative, join our  <a href="https://join.slack.com/t/northeastern-hac3935/shared_invite/zt-fctqwcqe-7~n_GXliEYbQzUeqERHH6A">Slack</a> channel.
        </div>
      )
    },
    {
      question: 'I’d like to provide some feedback. Where can I do that?',
      answer: (
        <div>
          We welcome all types of feedback, as we are happy and eager to improve this initiative as much as possible.
          Feel free to contact us directly at{' '}
          <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a> with the subject
          line: "[Project Request/Volunteer] Feedback".
        </div>
      )
    }
  ]
};

export { FAQItems };
