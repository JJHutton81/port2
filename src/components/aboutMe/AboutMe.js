import React, { Component } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Rain from "../rain/Rain";

import About from "../../media/aboutMeGraphic.png";
import Headshot from "../../media/headshot.jpg";
import Needle from "../../media/needle.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0",
  },
  title: {
    width: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    marginBottom: "20px",
    textAlign: "center",
    padding: "2%",
    position: "relative",
    zIndex: "3",
  },
  logo: {
    height: "100px",
    width: "80%",
    maxWidth: "300px",
    margin: "10px auto",
  },
  img: {
    height: "300px",
    width: "50%",
    maxWidth: "200px",
    margin: "5px auto",
  },
  card: {
    width: "90%",
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <CssBaseline />
      {/* <Rain /> */}
      <Paper
        className={classes.title}
        elevation={3}>
        <Typography>
          Full-stack ReactJS developer with a background in graphic design and
          passion for all things front-end
        </Typography>
      </Paper>
      <Card className={classes.card}>
        <CardMedia
          className={classes.logo}
          image={require("../../media/aboutMeGraphic.png")}
          title="About Me Logo"
        />
        <CardContent>
          <CardMedia
            className={classes.img}
            image={require("../../media/headshot.jpg")}
            title="James' Headshot"
          />
          <Typography>
            Hello and thank you for visiting my website. I started my journey as
            a classically trained artist. As I grew older, I found myself
            getting pulled more and more to the modern/technical side of art,
            and became a graphic designer. Everything you see here is my own
            work. About ten years ago I moved to Seattle and gained an interest
            in web development. Now I’m a full-stack ReactJS developer who
            favors the front end. I have a passion for creating responsive,
            dynamic, fast, and most of all creative apps. I love clever
            animations and tricks that amplify the user experience. If you like
            what you see, hit me up. Let’s make something special together.{" "}
          </Typography>
          <CardMedia
            className={classes.img}
            image={require("../../media/needle.png")}
            title="The Space Needle"
          />
        </CardContent>
      </Card>
    </Container>
  );
}

// const Body = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   z-index: 2;
//   position: relative;
// `;

// const Title = styled.div`
//   width: 100%;
//   height: 100px;
//   background: black;
//   z-index: 4;
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const H1 = styled.h1`
//   font-family: "Roboto", sans-serif;
//   font-size: 1.5rem;
//   color: white;
// `;

// const HeadGraphic = styled.img`
//   position: absolute;
//   width: 100%;
//   height: 100vh;
//   z-index: -1;
// `;

// const AboutFX = styled.img`
//   width: 30%;
//   float: left;
//   margin: 3% 0 3% 6%;
//   @media (max-width: 400px) {
//     width: 80%;
//     margin: 15% auto 5% auto;
//   }
//   @media (min-width: 401px) and (max-width: 700px) {
//     margin: 0% auto 5% auto;
//     width: 80%;
//   }
//   @media (min-width: 701px) and (max-width: 1000px) {
//     width: 40%;
//   }
// `;

// const GraphicWrap = styled.div`
//   background-size: contain;
//   height: 500px;
//   width: 99.8%;
//   position: absolute;
//   margin-top: 7%;
//   @media (max-width: 1000px) {
//     display: flex;
//     flex-direction: column;
//   }
// `;

// const TextWrap = styled.div`
//   display: flex;
//   width: 80%;
//   margin: 20% auto 0 auto;
//   display: flex;
//   background-color: rgba(255, 255, 255, 0.5);
//   border-radius: 8px;
//   height: 300px;
//   & :hover {
//     background-color: rgba(255, 255, 255, 1);
//   }
//   @media (max-width: 700px) {
//     flex-direction: column;
//     align-items: center;
//     margin: 1% auto;
//   }
//   @media (min-width: 701px) and (max-width: 1000px) {
//     flex-direction: row;
//     margin: 0 auto;
//   }
// `;

// const Head = styled.img`
//   height: 300px;
//   width: 250px;
//   border-radius: 8px 0px 0px 8px;
//   @media (max-width: 400px) {
//     width: 95%;
//   }
//   @media (min-width: 401px) and (max-width: 700px) {
//     display: none;
//   }
//   @media (min-width: 701px) and (max-width: 1000px) {
//     height: 313px;
//   }
// `;

// const Head2 = styled.img`
//   @media (min-width: 1px) and (max-width: 400px) {
//     display: none;
//   }
//   @media (min-width: 401px) and (max-width: 700px) {
//     width: 200px;
//     float: left;
//     margin: 0 2% 2% 0;
//   }
//   @media (min-width: 701px) {
//     display: none;
//   }
// `;

// const Section = styled.section`
//   z-index: 1;
//   background: rgba(255, 255, 255, 0.5);
//   height: 300px;
//   width: 80%;
//   display: flex;
//   align-items: center;
//   justifycontent: cnter;
// `;

// const P = styled.p`
//   font-size: 1.2rem;
//   padding: 2.5%;
//   text-align: justify;
//   z-index: 1;
//   font-family: 'Roboto', sans-serif;
//   @media (max-width: 400px) {
//     font-size: 1rem;
//   }
//   @media (min-width: 401px) and (max-width: 700px) {
//     font-size 1.2rem;
//   }
//   @media (min-width: 701px) and (max-width: 1000px) {
//     font-size 1.3rem;
//   }
// `;

// const NeedleFX = styled.img`
//   width: 250px;
//   height: 300px;
// `;
