import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';

import scrollToComponent from 'react-scroll-to-component';
import styled from 'styled-components';

// import Landing from './components/landing/Landing';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
// import Footer from './components/footer/Footer';

import LiLogo from './media/LI-Logo.png';
import GhLogo from './media/github.png';
import TLogo from './media/twitter.png';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  componentDidMount() {
    scrollToComponent(this.AboutMe, {
      offset: 0,
      align: 'top',
      duration: 500,
      ease: 'inCirc'
    });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }
  render() {
    return (
      <div id='App'>
        {/* <section
          className='landing'
          ref={section => {
            this.Landing = section;
          }}>
          <Landing />
        </section> */}
        <div>
          <Menu noOverlay pageWrapId={'page-wrap'} outerContainerId={'App'}>
            <div>
              <h1
                className='menu-item'
                onClick={() =>
                  scrollToComponent(this.AboutMe, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                About Me
              </h1>
              <h1
                className='menu-item'
                onClick={() =>
                  scrollToComponent(this.Skills, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                Skills
              </h1>
              <h1
                className='menu-item'
                onClick={() =>
                  scrollToComponent(this.Projects, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                Projects
              </h1>
              <h1
                className='menu-item'
                onClick={() =>
                  scrollToComponent(this.Contact, {
                    offset: 0,
                    align: 'top',
                    duration: 500
                  })
                }>
                Contact
              </h1>
              
                <H1>Follow me on</H1>
                <a
                  href='https://www.linkedin.com/in/james-hutton-87a82b183/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Image src={LiLogo} alt='Linked in logo' />
                </a>
                <a
                  href='https://github.com/FreeKeyBoy?tab=repositories'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Image src={GhLogo} alt='Github logo' />
                </a>
                <a
                  href='https://twitter.com/JamesHu91877325'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Image src={TLogo} alt='Twitter logo' />
                </a>
              
            </div>
          </Menu>
        </div>
        <div id='page-wrap'>
          <section
            className='aboutMe'
            ref={section => {
              this.AboutMe = section;
            }}>
            <AboutMe />
          </section>
          <section
            className='skills'
            ref={section => {
              this.Skills = section;
            }}>
            <Skills />
          </section>
          <section
            className='projects'
            ref={section => {
              this.Projects = section;
            }}>
            <Projects />
          </section>
          <section
            className='contact'
            ref={section => {
              this.Contact = section;
            }}>
            <Contact />
          </section>
          {/* <section>
            <Footer />
          </section> */}
        </div>
      </div>
    );
  }
}

const H1 = styled.h1`
color: white;
font-family: 'Roboto', sans-serif;
font-size: 1.6rem;
margin: 10% 0 5% 0;
text-align: end;
`

const Image = styled.img`
height: 40px;
float: right;
margin-top: 5%;
&:hover {
  border-bottom: 2px solid crimson;
}
`