import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainNavbar } from './components/MainNavbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { RequestPage } from './pages/RequestPage';
import { CommPartnersPage } from './pages/CommPartnersPage';
import { FAQPage } from './pages/FAQPage';
import { ProjectWorkPage } from './pages/ProjectWorkPage';
import ProjectSelectPage from './pages/ProjectSelectPage';
import DefaultPage from './pages/DefaultPage'
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <MainNavbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route path="/project-request" component={RequestPage} />
        <Route path="/community-partners" component={CommPartnersPage} />
        <Route path="/faq" component={FAQPage} />
        <Route exact path="/projects/:projectId" component={ProjectSelectPage} />
        <Route path="/projects/:projectId/work" component={ProjectWorkPage} />
        <Route path="/" component={DefaultPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
