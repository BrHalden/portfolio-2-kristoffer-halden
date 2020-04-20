import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Contact from './Contact.js'
import About from './About.js'
import Home from './Home.js'

export default function Header (props) {
    return (
        <Router>
            <Nav>
                <Navbar>
                    <NavLink to='/' exact className="nav-link">
                    Home
                </NavLink>
                <NavLink to='/About' className="nav-link">
                    About
                </NavLink>
                <NavLink to='/Contact' className="nav-link">
                    Contact
                </NavLink>
                </Navbar>
            </Nav>
            <Container>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/About' component={About} />
                    <Route path='/Contact' component={Contact} />
                </Switch>
            </Container>
        </Router>
    )
}