import React, { Component } from 'react';
import styled from "styled-components";

import "./contact.css";

import ContactGrapfix from '../../media/contactGraphic.png';
import Foot from '../../media/footGraphic.png';

export default class Contact extends Component {
  render() {
    return (
      <Body>
        <div>
          <ContactFX src={ContactGrapfix} alt='Logo' />
        </div>
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
            method='POST'
            action='https://formspree.io/jjhutton81@gmail.com'>
            <Input
              type='email'
              name='email'
              placeholder='Enter Your Email'
              className='form-input'
            />
            <Textarea
              name='message'
              contenteditable='true'
              placeholder="What's on your mind?"
              wrap='soft'
            />
            <div className="btnWrap">
              <button type='submit' className='Btn'>
                Submit
              </button>
            </div>
          </Form>
        </FormWrap>
        <Footer src={Foot} alt='Logo' />
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
`

const ContactFX = styled.img`
width: 30%;
float: right;
margin: 6% 6% 3% 0%;
@media (max-width: 1000px) {
width: 100%;
margin: 16% 0 6% 0;
}
`

const Form = styled.form`
display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Input = styled.input`
width: 50%;
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
`

const Textarea = styled.textarea`
width: 50%;
padding: 1.5%;
border-radius: 8px;
margin-top: 1.5%;
height: 20vh;
font-family: 'Roboto', sans-serif;
font-size: 1.2rem;
border-style: inset;
border: 2px solid #001f3f;
@media (max-width: 1000px) {
  width: 90%;
}
`

const Footer = styled.img`
width: 100%;
position: absolute;
z-index: -1;
height: 100vh;
`

const FormWrap = styled.div`
display: flex;
margin: 0 auto;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`