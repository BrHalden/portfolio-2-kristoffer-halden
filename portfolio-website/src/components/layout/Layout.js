import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Contact from '../contact/Contact.js'
import About from '../about/About.js'
import Home from '../home/Home.js'
import Cv from '../cv/Cv.js'

export default function Layout (props) {
    return (
        <Router>
            <Nav>
                <NavLink to='/' exact className="nav-link">
                    Home
                </NavLink>
                <NavLink to='/About' className="nav-link">
                    About
                </NavLink>
                <NavLink to='/Cv' className="nav-link">
                    CV
                </NavLink>
                <NavLink to='/Contact' className="nav-link">
                    Contact
                </NavLink>
            </Nav>
            <Container className='home'>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/About' component={About} />
                    <Route path='/Cv' component={Cv} />
                    <Route path='/Contact' component={Contact} />
                </Switch>
            </Container>
        </Router>
    )
}