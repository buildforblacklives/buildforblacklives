import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';
import { MainNavbar } from './components/MainNavbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MatchedProjects } from './pages/MatchedProjects';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { RequestPage } from './pages/RequestPage';
import { CommPartnersPage } from './pages/CommPartnersPage';
import { FAQPage } from './pages/FAQPage';
import { ProjectWorkPage } from './pages/ProjectWorkPage';
import ProjectSelectPage from './pages/ProjectSelectPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import * as constants from './data/constants';

ReactGA.initialize(process.env.GA_TAG);

const App = () => {
  return (
    <BrowserRouter>
      <MainNavbar />
      <ScrollToTop />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

const Routes = () => {
  const history = useHistory();

  useEffect(() => {
    const host = window.location.hostname;

    if (host !== 'localhost') {
      trackPageView(); // Track the first pageview upon load
      history.listen(trackPageView); // Track subsequent pageviews
    }
  }, [history]);

  const trackPageView = () => {
    const pageUrl = window.location.pathname + window.location.search;
    ReactGA.set({ page: pageUrl });
    ReactGA.pageview(pageUrl);
  };

  return (
    <Switch>
      <Route exact path={constants.URL_HOME} component={HomePage} />
      <Route path={constants.URL_ABOUT} component={AboutPage} />
      <Route exact path={constants.URL_PROJECTS} component={ProjectsPage} />
      <Route path={constants.URL_PROJECT_REQUEST} component={RequestPage} />
      <Route path={constants.URL_MATCHED_PROJECTS} component={MatchedProjects} />
      <Route path={constants.URL_COMMUNITY_PARTNERS} component={CommPartnersPage} />
      <Route path={constants.URL_FAQ} component={FAQPage} />
      <Route exact path="/projects/:projectId" component={ProjectSelectPage} />
      <Route path="/projects/:projectId/work" component={ProjectWorkPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
