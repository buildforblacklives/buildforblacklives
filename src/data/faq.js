import React from 'react';
import { Link } from 'react-router-dom';
import * as constants from './constants';

const FAQItems = {
  clientFAQ: [
    {
      category: 'Submitting a Request',
      questions: [
        {
          question: 'Who is eligible for requesting a project?',
          answer: (
            <span>
              Organizations, institutions, businesses (including shops or restaurants), and activist groups that are
              Black-owned/led, or primarily serve the Black community can submit project requests. If you have questions
              about whether your organization is eligible, please email us at{' '}
              <a href={constants.EMAIL_MAILTO}>{constants.EMAIL}</a> with the
              subject line: "[Project Request] Question".
            </span>
          )
        },
        {
          question: 'How do I submit a request for a project?',
          answer: (
            <span>
              You can submit your project details using the form on the{' '}
              <Link to={constants.URL_PROJECT_REQUEST}>Project Request</Link> page on this site!
            </span>
          )
        },
        {
          question: 'What are the types of services that I can request?',
          answer:
            'This initiative is mostly focused on projects that fall within the technology and design fields. This includes website development, graphic design services, social media graphics, apps, data visualizations and more! Check out the project submission form for a breakdown of the different types of projects. If you’re still unsure about whether or not your project qualifies, feel free to submit a project request, and we will let you know if your project is ineligible.'
        },
        {
          question: 'How long will it take for me to find out if my request is approved?',
          answer:
            'Your request will be approved and posted on the website within 3-5 business days. We will send you an email once your request has been approved and posted on the website!'
        },
        {
          question: 'How many requests can I submit?',
          answer:
            'There are no limits on the number of project requests you make, but we advise that a separate request be made for each self-contained project that a single volunteer can complete.'
        },
        {
          question:
            'I would like to make changes to my submission, add more information, change some details, and/or update my contact information. How can I do this?',
          answer: (
            <span>
              To make updates to your project request, email us directly at{' '}
              <a href={constants.EMAIL_MAILTO}>{constants.EMAIL}</a> with the
              subject line: "[Project Request] Change Project Request". In your email, please include the project title
              and requested changes. Please use the same email you used to submit the initial request so we can confirm
              that it’s you!
            </span>
          )
        },
        {
          question: 'I have some other questions. How can I contact you?',
          answer: (
            <span>
              For direct inquiries, email us at{' '}
              <a href={constants.EMAIL_MAILTO}>{constants.EMAIL}</a> with the
              subject line: "[Project Request] Question".
            </span>
          )
        }
      ]
    },
    {
      category: 'Working with Volunteers',
      questions: [
        {
          question: 'How will I know when someone plans to work on my project?',
          answer:
            'Individuals interested in working on your project will connect with you directly using the contact information you provided in your project request. Once they reach out, you can discuss project specifications in more detail and communicate work terms.'
        },
        {
          question:
            'A volunteer is already working on my project, or I no longer have a need for the project I requested. How can I have my project removed from the site?',
          answer: (
            <span>
              Please email <a href={constants.EMAIL_MAILTO}>{constants.EMAIL}</a>{' '}
              with the subject line: "[Project Request] Close Project Request". In your email, include the title of the
              request you would like to be taken down. Please use the same email that you used to submit the initial
              request form so we can confirm it’s you. We will archive your request within 3-5 business days at maximum,
              and the project post won’t be visible on our website anymore.
            </span>
          )
        },
        {
          question:
            'Who should cover any expenses related to paid or optional features or services (eg. website domain, Facebook page promotions, etc.)?',
          answer:
            'Although volunteers are offering their services for free, unless they explicitly offer to cover additional expenses, any external paid features (costs of hosting/maintaining a website etc.) should be covered by the client organization. Remember that volunteers can help you research and find affordable options best suited to your needs!'
        },
        {
          question:
            'I’m having work-related issues with the volunteer(s) who agreed to take on my project. What should I do?',
          answer:
            'At this time, this platform is meant to connect volunteers to clients they would want to work with. We have minimal oversight on the communication and work process between volunteers and clients, but please reach out if you would like to have your project reposted for a new team to work on.'
        }
      ]
    },
    {
      category: 'Working with Project Managers',
      questions: [
        {
          question: 'What is the role of a Project Manager (PM)?',
          answer:
            'The role of a project manager will be to manage communication between the project owner and volunteers. The PM will be responsible for understanding the needs of the business/organization and translating them effectively to your volunteers. They will also be responsible for regularly updating the project owners on the volunteers’ work. The frequency of these updates is to be decided by you, the project owner.'
        },
        {
          question: 'How do I open my project to PMs?',
          answer:
            'When filling out the Project Request Form, make sure to check off the ‘Project Manager’ box. If you have already filled out the form, you can email us to let us know that you would like to update your selection. We will then add a ‘Project Manager’ tag to your posting (similar to project types, like ‘Mobile App’). Please note that you do not need to have a PM before you start your project work with other volunteers; PMs can be onboarded into a project with existing volunteers.'
        },
        {
          question: 'What should I do if a project manager reaches out to work on my project?',
          answer:
            'Just as with any other volunteer, it is up to you to screen or interview interested PMs as you see fit before deciding whether you would like to include them in your project. The amount of ownership that you give a PM on your project is up to you. Examples of responsibilities that they can take on include: interviewing/recruiting volunteers, delegating work to volunteers, and serving as a liaison between you and your volunteers. The role of a PM is to offload some of the project owner’s work. It is entirely up to you, the project owner, what that work will be.'
        },
        {
          question: 'I have found a PM I would like to work with. What are the next steps?',
          answer: (
            <span>
              Once you have found a PM that you would like to work with, the PM should email{' '}
              <a href={constants.EMAIL_MAILTO}>{constants.EMAIL}</a> and CC you,
              stating that they have been assigned as your project’s PM. We will include their contact information on
              the project’s card on <a href={constants.URL_HOME}>our website</a>. Prospective volunteers will then be able to CC the PM
              when they initially reach out.
            </span>
          )
        },
        {
          question: 'Is there anything else I should know about PMs?',
          answer: (
            <span>
              <div>
                All project managers looking to join a project must be committed to anti-racism and be respectful of the
                wishes and vision of the project owner. Their role is to serve as a line of communication between owners
                and volunteers, not to make decisions on behalf of the project owners.
              </div>
              <br />
              <div>
                Check out the{' '}
                <a
                  href="https://docs.google.com/document/d/1Lj6bRtkKgZNtEnnvfatSJHxqYKwt8wA6t3lki5gyWok/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Manager Starter Guide
                </a>{' '}
                for more information on what it means to add a PM to your project.
              </div>
            </span>
          )
        }
      ]
    }
  ],
  volunteerFAQ: [
    {
      category: 'Working as a Developer or Creative',
      questions: [
        {
          question: 'What are the conditions that need to be met before taking on a project?',
          answer: (
            <span>
              Build for Black Lives requires all participants working on a project to commit to our anti-racism pledge,
              as well as offer their requested services free of charge. We are an initiative that proudly supports the{' '}
              <a href="https://blacklivesmatter.com/">Black Lives Matter</a> movement, and requires that all projects
              are created in an anti-racist and anti-discriminatory way. If you are an ally who wants to learn more
              about building anti-racist technology, check out our <Link to="/resources">Anti-Racist Resources</Link>{' '}
              page.
            </span>
          )
        },
        {
          question: 'I see a project that I would like to work on. How can I get in touch with the client?',
          answer:
            'Once you view a project you want to work on, click on the "Work on this Project" button to view the client’s contact information; use this to personally reach out to them and communicate work terms.'
        },
        {
          question:
            'I see a project that interests me, but I have some questions on the requirements and deliverables. Where can I find more information before committing to the project?',
          answer:
            'Feel free to contact the client personally to ask any questions before agreeing to work on their project; click on the "Work on this Project" button to view the client’s contact information.'
        },
        {
          question: 'Can more than one person work on a project?',
          answer:
            'If you would like to work with other people on a project, find your group before contacting a client. During the initial communication stages, one person can communicate with the client on the behalf of the group. Once the group is officially working on the project, you may continue to collaborate and communicate together in the way that works best for you and the client.'
        },
        {
          question:
            'Who should cover any expenses related to paid or optional features or services (eg. website domain, Facebook page promotions, etc.)?',
          answer:
            'Unless you explicitly offer to, any external paid features (e.g. hosting/maintaining a website) should be covered by the client. As a volunteer, you can help with researching and finding affordable options that best suit the client’s needs. Remember to inform your client of any expenses that are required to complete their project in advance.'
        },
        {
          question: 'I’m having work-related issues with the client I’m working for. What should I do?',
          answer:
            'At this time, this platform is meant to connect volunteers to clients they would want to work with; we have minimal oversight on the communication and work process between volunteers and clients. That being said, we encourage all volunteers to communicate clearly with clients about their skills and capacity from the start of their project, and to ensure they follow through on all commitments that they make. Please communicate directly with the client to resolve any issues or concerns you have about the project or work arrangement.'
        },
        {
          question: 'I have some other questions. How can I contact you?',
          answer: (
            <span>
              For direct inquiries, email us at{' '}
              <a href={constants.EMAIL_MAILTO}>{constants.EMAIL}</a> with the
              subject line: "[Volunteer] Question".
            </span>
          )
        }
      ]
    },
    {
      category: 'Working as a Project Manager',
      questions: [
        {
          question: 'What is the role of a Project Manager (PM)?',
          answer:
            'Your role as a project manager will be to manage communication between the project owner and volunteers. You will be responsible for understanding the needs of the business/organization and translating them effectively to the volunteers. You will also be responsible for regularly updating the project owners on the volunteers’ work. The frequency of these updates is to be decided by the project owner. The project owner will determine the extent to which you will be responsible for coordinating existing volunteers or onboarding new ones.'
        },
        {
          question: 'How do I know which projects need a Project Manager?',
          answer:
            'Projects that need a project manager will have a ‘Project Manager’ tag. You can filter projects by this tag to see only the projects that are looking for PMs.'
        },
        {
          question: 'How do I take on a project as a PM?',
          answer: (
            <span>
              When you find a project that you are interested in, you can click on the ‘Work on this Project’ button and
              follow the prompts to contact the project owner. If the project owner has agreed to having you join, we
              ask that you{' '}
              <strong>
                email <a href={constants.EMAIL_MAILTO}>{constants.EMAIL}</a> and CC
                the project owner
              </strong>
              , stating that you have been assigned as the project’s PM. We will then include your contact information
              on the project’s card on <a href={constants.URL_HOME}>our website</a>.
            </span>
          )
        },
        {
          question: 'Can I invite other volunteers I know to work on the project?',
          answer: (
            <span>
              We will include your contact information (name, email) on the card for the project you are managing. This
              way, volunteers can CC you in their initial communications with the businesses/organizations. If you
              personally know a developer, designer, or digital marketer who would be interested in working on the
              project, we ask that they follow the same protocol as on <a href={constants.URL_HOME}>our website</a> so that they can
              commit to our anti-racist guidelines. You can also use our <a href={constants.FACEBOOK_GROUP}>Facebook Group</a> to recruit volunteers and build
              project teams.
            </span>
          )
        },
        {
          question: 'Is there anything else I should know before taking on a project?',
          answer:
            'All project managers looking to join a project must be committed to anti-racism and be respectful of the wishes and vision of the project owner. Your role is to serve as a line of communication between owners and volunteers, not to make decisions on behalf of the project owners.'
        },
        {
          question: 'I have some other questions. How can I contact you?',
          answer: (
            <span>
              For direct inquiries, email us at{' '}
              <a href={constants.EMAIL_MAILTO}>{constants.EMAIL}</a> with the
              subject line: "[Volunteer] Question".
            </span>
          )
        }
      ]
    }
  ],
  initiativeFAQ: [
    {
      category: 'About Us',
      questions: [
        {
          question: 'What is Build for Black Lives?',
          answer: (
            <span>
              Build for Black Lives is a platform built to connect anti-racist individuals with activists, organizers,
              and Black-owned businesses to provide pro bono work creating websites, apps, graphics, social media
              content, data visualizations, and/or other projects. Our aim is to provide pro bono services as a means of
              working towards justice and reparations for a community that has been systematically oppressed, exploited,
              and underserved by the tech and design industries. Visit our <Link to={constants.URL_ABOUT}>About</Link> page to learn
              more.
            </span>
          )
        },
        {
          question: 'What is HackBeanpot?',
          answer: (
            <span>
              Build for Black Lives is an initiative led by HackBeanpot, a 501(c)(3) Boston-based hackathon run by
              undergraduate students. HackBeanpot is an independently-run Boston hackathon for curious students,
              hackers, makers, and beginners. To learn more, visit our website{' '}
              <a href="https://hackbeanpot.com/">hackbeanpot.com</a>.
            </span>
          )
        }
      ]
    },
    {
      category: 'Contact Us',
      questions: [
        {
          question: 'How can I contact or partner with you?',
          answer: (
            <span>
              Reach out to us directly at{' '}
              <a href={constants.EMAIL_MAILTO}>{constants.EMAIL}</a>. You can also
              visit our <Link to={constants.URL_ABOUT}>About</Link> page or see the footer at the bottom of the page for our
              contact information.
            </span>
          )
        },
        {
          question: 'I’d like to provide feedback. Where can I do that?',
          answer: (
            <span>
              We welcome all types of feedback, as we are happy and eager to improve this initiative as much as
              possible. Feel free to contact us directly at{' '}
              <a href={constants.EMAIL_MAILTO}>{constants.EMAIL}</a> with the
              subject line: "Feedback".
            </span>
          )
        }
      ]
    }
  ]
};

export { FAQItems };
