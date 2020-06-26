import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ContactUsPage } from './components/ContactUsPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-basics">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactUsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
