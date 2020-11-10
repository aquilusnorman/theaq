import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Creations from './pages/Creations';
import facebook_logo from './img/social-media-logo/facebook.png'
import Skills from './pages/Skills';
import Blog from './pages/Blog';

class App extends React.Component{
  render(){
    return(
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>
              <a href="/#">
                TheAQ
              </a> 
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"></Navbar.Toggle>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/blog">Blog</Link>
                <Link className="nav-link" to="/skills">Skills</Link>
                <Link className="nav-link" to="/creations">Creations</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/about">About</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact><Home/></Route>
          <Route path="/blog" exact><Blog/></Route>
          <Route path="/skills" exact><Skills/></Route>
          <Route path="/creations" exact><Creations/></Route>
          <Route path="/contact" exact><Contact/></Route>
          <Route path="/about" exact><About/></Route>

          <Footer className="myFooter"/>

        </Container>
    );
  }
}

export default App;
