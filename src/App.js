import React, { Component } from "react";
import { push as Menu } from "react-burger-menu";
import { Element } from "react-scroll";

import scrollToComponent from "react-scroll-to-component";
import styled from "styled-components";

import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";

import "./App.css";
import Navbar from "./components/nav/Navbar";

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
      align: "top",
      duration: 500,
      ease: "inCirc"
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
      <div id="App">
        <div>
          <Menu noOverlay pageWrapId={"page-wrap"} outerContainerId={"App"}>
            <div>
              <h1
                className="menu-item"
                onClick={() =>
                  scrollToComponent(this.AboutMe, {
                    offset: 0,
                    align: "top",
                    duration: 500,
                    activeClass: "active"
                  })
                }
              >
                About Me
              </h1>
              <h1
                className="menu-item"
                onClick={() =>
                  scrollToComponent(this.Projects, {
                    offset: 0,
                    align: "top",
                    duration: 500
                  })
                }
              >
                Projects
              </h1>
              <h1
                className="menu-item"
                onClick={() =>
                  scrollToComponent(this.Skills, {
                    offset: 0,
                    align: "top",
                    duration: 500
                  })
                }
              >
                Skills
              </h1>
              <h1
                className="menu-item"
                onClick={() =>
                  scrollToComponent(this.Contact, {
                    offset: 0,
                    align: "top",
                    duration: 500
                  })
                }
              >
                Contact
              </h1>
            </div>
          </Menu>
        </div>
        <PageWrap>
          <Navbar />
          <Element name="AboutMe">
            <About
              ref={section => {
                this.AboutMe = section;
              }}
            >
              <AboutMe />
            </About>
          </Element>
          <Element name="Projects">
            <section
              className="projects"
              ref={section => {
                this.Projects = section;
              }}
            >
              <Projects />
            </section>
          </Element>
          <Element name="Skills">
            <section
              className="skills"
              ref={section => {
                this.Skills = section;
              }}
            >
              <Skills />
            </section>
          </Element>
          <Element name="Contact">
            <section
              className="contact"
              ref={section => {
                this.Contact = section;
              }}
            >
              <Contact />
            </section>
          </Element>
          {/* <section>
            <Footer />
          </section> */}
          {/* </ColoredScrollBars> */}
        </PageWrap>
      </div>
    );
  }
}

const H1 = styled.h1`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  margin: 10% 0 5% 0;
  text-align: end;
`;

const Image = styled.img`
  height: 40px;
  float: right;
  margin-top: 5%;
  &:hover {
    border-bottom: 2px solid crimson;
  }
`;

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const About = styled.section`
  @media (max-width: 500px) {
    margin-bottom: 41%;
  }
`;
