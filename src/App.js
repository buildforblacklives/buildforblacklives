import React from 'react';
import './App.css';
import { MainNavbar } from './components/MainNavbar';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { RequestPage } from './components/RequestPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/project-request" component={RequestPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
