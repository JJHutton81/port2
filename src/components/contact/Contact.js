import React, { Component } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import css from "animate.css";

import "../../App.css";

import ContactGrapfix from "../../media/contactGraphic.png";
import Foot from "../../media/footGraphic.png";

export default class Contact extends Component {
  render() {
    return (
      <Body>
        <Div>
          <ContactFX src={ContactGrapfix} alt="Logo" />
        </Div>
        <FormWrap>
          {/* <h1 className='ContactTitle'>
            This site is under almost constant construction. Check back often
            for more clever little transitions, animations, and projects.{' '}
          </h1>
          <h1 className='ContactTitle'>
            Do you have any questions, comments, or want to work with me?
          </h1>
          <h1 className='ContactTitle'>Let's make something special.</h1> */}
          <Form
            method="POST"
            action="https://formspree.io/jjhutton81@gmail.com"
          >
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOut="fadeOutRight"
              delay={1000}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="form-input"
              />
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOut="fadeOutLeft"
              delay={1000}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Textarea
                name="message"
                contenteditable="true"
                placeholder="What's on your mind?"
                wrap="soft"
              />
            </ScrollAnimation>
            {/* <ScrollAnimation
              animateIn="bounceInUp"
              animateOut="fadeOutDown"
              delay={500}
            > */}
              <div className="btnWrap">
                <button type="submit" className="BtnS">
                  Submit
                </button>
              </div>
            {/* </ScrollAnimation> */}
          </Form>
        </FormWrap>
        <Footer src={Foot} alt="Logo" />
      </Body>
    );
  }
}

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
`;

const ContactFX = styled.img`
  width: 30%;
  float: left;
  margin: 6% 0 3% 6%;
  @media (max-width: 400px) {
    width: 80%;
    margin: 15% auto 5% auto;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    margin: 0% auto 5% auto;
    width: 80%;
  }
  @media (min-width: 701px) and (max-width: 1000px) {
    width: 40%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
width: 60%;
padding: 1%;
border-radius: 8px;
height: 30px
font-family: 'Roboto', sans-serif;
font-size: 1.2rem;
border-style: inset;
border: 2px solid #001f3f;
margin-top: 3%;
@media (max-width: 1000px) {
  width: 90%;
}
`;

const Textarea = styled.textarea`
  width: 60%;
  padding: 1.5%;
  border-radius: 8px;
  margin-top: 1.5%;
  height: 20vh;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  border-style: inset;
  border: 2px solid #001f3f;
  @media (max-width: 1000px) {
    width: 90%;
    height: 200px;
  }
`;

const Footer = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
  height: 100vh;
`;

const FormWrap = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
