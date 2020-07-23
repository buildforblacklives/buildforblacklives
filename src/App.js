import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Airtable from 'airtable';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainNavbar } from './components/MainNavbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { RequestPage } from './pages/RequestPage';
import { FAQPage } from './pages/FAQPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ProjectWorkPage } from './pages/ProjectWorkPage';
import ScrollToTop from './components/ScrollToTop';
import { setProjects } from './state/projects';

const App = () => {
  const dispatch = useDispatch()
  console.log("ahllo")

  useEffect(() => {
    const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base('appBzqG0sB4hqtE0I');
    let airtableRecords = []
    console.log("wtf")

    const fetchProjects = async () => {
      base('Design projects').select({
        view: "Approved Projects"
      }).eachPage(async (records, fetchNextPage) => {
        airtableRecords = records;
        await dispatch(setProjects(airtableRecords))

        fetchNextPage();
      }, (err) => {
        if (err) { console.error(err); return; }
      })
    }

    fetchProjects()
  }, [dispatch])

  return (
    <BrowserRouter>
      <MainNavbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route path="/project-request" component={RequestPage} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/projects/:projectId" component={ProjectWorkPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
