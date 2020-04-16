import React, { Component } from "react";
import { Link, scroller } from "react-scroll";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "../../App.css";

export default class Navbar extends Component {
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  render() {
    return (
      <Nav>
        <Div>
          <Link
            activeClass="active"
            to="AboutMe"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={0}
            onClick={() => this.scrollTo()}
          >
            About Me
          </Link>
          <Link
            activeClass="active"
            to="Projects"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={0}
            onClick={() => this.scrollTo()}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={0}
            onClick={() => this.scrollTo()}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={0}
            onClick={() => this.scrollTo()}
          >
            Contact Me
          </Link>
        </Div>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  width: 100vw;
  height: 100px;
  background: black;
  position: fixed;
  z-index: 3;
`

const Div = styled.div`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
`;