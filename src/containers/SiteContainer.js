import React from "react";
import "../styling/site-container-styling.css";
import LandingPage from "../components/LandingPage"
import HomePage from "../components/HomePage"
import AboutPage from "../components/AboutPage"
import ContactUsPage from "../components/ContactUsPage"
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import NavBar from "../components/NavBar";


class SiteContainer extends React.Component {
    state = { }


    // contains the routing information for the site
    render() {
        return(
            <div>
            <Router>

            <Route path="/"
                   exact={true}
                   render={()=> <LandingPage/> }/>


            <Route path="/home"
                   exact={true}
                   render={()=>
                        <div>
                            <NavBar/>
                            <HomePage/>
                        </div>}/>


            <Route path="/about"
                   exact={true}
                   render={()=>
                        <div>
                            <NavBar/>
                            <AboutPage/>
                        </div>}/>


            <Route path="/contact"
                   exact={true}
                   render={()=>
                        <div>
                            <NavBar/>
                            <ContactUsPage/>
                        </div>}/>
            </Router>
            </div>
        )
    }
}

export default SiteContainer