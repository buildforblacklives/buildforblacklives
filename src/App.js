import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainNavbar } from './components/MainNavbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { FAQPage } from './pages/FAQPage';
import { RequestPage } from './pages/RequestPage';
import { ProjectWorkPage } from './pages/ProjectWorkPage';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route path="/project-request" component={RequestPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/projects/:projectId" component={ProjectWorkPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
