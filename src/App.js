import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainNavbar } from './components/MainNavbar';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ProjectsPageTemp } from './components/ProjectsPageTemp';
import { RequestPage } from './components/RequestPage';
import { ProjectWorkPage } from './components/ProjectWorkPage';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/projects-temp" component={ProjectsPageTemp} />
        <Route path="/project-request" component={RequestPage} />
        <Route path="/projects/:projectId" component={ProjectWorkPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
