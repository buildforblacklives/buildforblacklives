import React from 'react';
import './App.css';
import { MainNavbar } from './components/MainNavbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { FAQPage } from './pages/FAQPage';
import { RequestPage } from './pages/RequestPage';
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
        <Route path="/faq" component={FAQPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
