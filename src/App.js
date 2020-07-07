import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainNavbar } from './components/MainNavbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectsPageTemp } from './pages/ProjectsPageTemp';
import { RequestPage } from './pages/RequestPage';
import { FAQPage } from './pages/FAQPage';
import { ProjectWorkPage } from './pages/ProjectWorkPage';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <MainNavbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/projects-temp" component={ProjectsPage} />
        <Route exact path="/projects" component={ProjectsPageTemp} />
        <Route path="/project-request" component={RequestPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/projects/:projectId" component={ProjectWorkPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
