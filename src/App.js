import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';

import scrollToComponent from 'react-scroll-to-component';

import Landing from './components/landing/Landing';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

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
          <Menu
            noOverlay
            pageWrapId={'page-wrap'}
            outerContainerId={'App'}>
            <div>
              <h1
                className='menu-item'
                onClick={() =>
                  scrollToComponent(this.AboutMe, {
                    offset: 0,
                    align: 'top',
                    duration: 1500
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
                    duration: 1500
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
                    duration: 1500
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
                    duration: 1500
                  })
                }>
                Contact
              </h1>
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
          <section>
            <Footer />
          </section>
        </div>
      </div>
    );
  }
}
