import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../assets/logo.js';
import TechDesign from '../assets/tech-design.js';
import '../styling/ResourcesPage.css';

const ResourcesPage = () => (
  <Container className="resource-page" fluid>
    <Row className="about-align-center">
      <Col className="padding-r resources-order1">
        <h2>Racism in Tech and Design</h2>
        <p> The Tech and Design industries have had a long, racist, and non-inclusive history. To this day, these fields perpetuate white supremacy and 
        fail to properly represent Black folx. Software plays a huge role in our society, but most tech is not created with Black folx in mind. In fact, 
        lots of tech, such as facial recognition software that misidentifies Black people, not only fails to represent members of the Black community,
        but in many cases has explicitly racist, dangerous, and even deadly effects. </p>
      </Col>
      <Col xs={12} md={4}>
       <TechDesign className="mx-auto d-block icon" fluid />
      </Col>
    </Row>

    <hr className="resource-hr"/>

    <Row className="row-align-center">
      <Col xs={12} md={4}>
        <Logo className="mx-auto d-block icon" fluid />
      </Col>
      <Col>
        <h2>Where does Build for Black Lives fit in?</h2>
        <p>This platform <strong>requires all project participants to be anti-racist</strong>, and be actively 
        working to dismantle their own biases and white-centric coding and design practices.</p>

        <h4>We would like to make it clear that:</h4>
        <ul>
          <li><p>Participating in this initiative is <strong>NOT</strong> an opportunity for participants to do "charity work", cleanse their guilt, or impose their opinions about what the Black community needs.</p></li>
          <li><p>Participating in this initiative <strong>IS</strong> an opportunity to create projects that are explicitly requested by activists, organizers and Black Business owners, 
          and to provide free services, in order to work towards justice and reparations for a community that has been systematically oppressed, exploited, and underserved for hundreds of years.</p></li>
        </ul>
      </Col>
    </Row>

    <hr className="resource-hr"/>
    
    <Row className="row-align-center">
      <Col xs={12} md={8}>
        <h2>Anti-Racist Resources</h2>
        <Row className="row-align-center">
          <Col>
            <a className='heading-link' href='https://thecreativeindependent.com/guides/how-to-think-differently-about-doing-good-as-a-creative-person/'>
              Avoiding the "Creative Savior Complex"
            </a>
            <p>How to think differently about doing good. This resource is "A guide to avoiding 'creative savior complex' when working on social impact projects, written by Omayeli Arenyeka and illustrated by Neta Bomani".</p>
          </Col>
        </Row>

        <Row className="row-align-center">
          <Col>
            <a className='heading-link' href='https://thecreativeindependent.com/guides/how-to-begin-designing-for-diversity/'>
              'Designing for Diversity'
            </a>
            <p>A guide to get you started in building equitable products, services, and content, written by Boyuan Gao and Jahan Mantin of Project Inkblot, with illustrations by Fanny Luor.</p>
          </Col>
        </Row>

        <Row className="row-align-center">
          <Col>
            <a className='heading-link' href='https://thecreativeindependent.com/guides/how-to-begin-designing-for-diversity/'>
              Books by Black Scholars in Tech
            </a>
            <p>15+ Books by Black Scholars that members of the tech industry should read. Compiled by UCLAs Center for Critical Internet Inquiry.</p>
          </Col>
        </Row>

        <Row className="row-align-center">
          <Col>
          <a className='heading-link' href='https://www.instagram.com/p/CCLz13Kjhhq/?igshid=hcs3d4rycdi4'>
            Dismantling Racism Workbook
          </a>
          <p>A great informational resources and workbook developed initially by Kenneth Jones and Tema Okun. Find more resources at 
            <span><a href='https://www.dismantlingracism.org/'> dismantlingracism.org</a></span>
          </p>     
        </Col>
        </Row>

        <Row className="row-align-center">
          <Col>
            <a className='heading-link' href='https://docs.google.com/document/d/1PrAq4iBNb4nVIcTsLcNlW8zjaQXBLkWayL8EaPlh0bc/preview?fbclid=IwAR2cN7t9bK0bl0wdlBIyz2JiP2yRZHU031y6kNfGuR8jfEIKRTTPnh0RSY0&pru=AAABcp6aoew*gIcrg1J8mnVGpEPF6vgIfw'>
              Being an Anti-Racist White Ally
            </a>
            <p>A long list of resources with clear progressions and steps for unlearning white supremacy and working towards becoming an anti-racist ally. Document created by Anna Stamborski, Nikki Zimmermann, and Bailie Gregory.</p>
          </Col>
        </Row>

        <Row className="row-align-center">
          <Col>
            <a className='heading-link' href='https://www.mapping-access.com/blog-1/2020/6/2/anti-racist-critical-deisgn'>
              Design Commitments to Abolish White Supremacy
            </a>
            <p>A statement put out by the Critical Design Lab on action steps and Design commitments to abolish white supremacy</p>
          </Col>
        </Row>

        <Row className="row-align-center">
          <Col>
          <a className='heading-link' href='https://www.instagram.com/p/CCLz13Kjhhq/?igshid=hcs3d4rycdi4'>
            White Savior Complex (short summary)
          </a>
          <p>Important to consider why you are participating in this initiative, and how you talk about the work you are doing. Created by @eisellety on Instagram.</p>
          </Col>
        </Row>

        <Row className="row-align-center">
          <Col>
            <a className='heading-link' href='http://thepoliticsofdesign.com/'>
              'The Politics of Design'
            </a>
            <p>Working towards making design more responsible, anti-racist, and inclusive. This blog has posts written by a range of writers discussing "The Politics of Design"</p>
          </Col>
        </Row>
      </Col>
      </Row>
      
      <hr className="resource-hr"/>

      <Row className="padding-r row-align-center">
        <Row>
          <Col>
            <h4>Have additional resources you think should be featured?</h4>
            <p>Email us at:&nbsp;
            <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a>
            </p>
          </Col>
        </Row>
    </Row>
  </Container>
);

export { ResourcesPage };
