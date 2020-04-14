import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Rain from "../rain/Rain";

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
    height: "150px",
    width: "80%",
    maxWidth: "500px",
    margin: "15px auto",
  },
  img: {
    height: "300px",
    width: "50%",
    maxWidth: "200px",
    margin: "5px auto",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cardWrap: {
    width: "90%",
    marginBottom: "20px",
  },
  text: {
    maxWidth: "400px",
    textAlign: "justify",
  }
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <CssBaseline />
      <Rain />
      <Paper className={classes.title} elevation={3}>
        <Typography>
          Full-stack ReactJS developer with a background in graphic design and
          passion for all things front-end
        </Typography>
      </Paper>
      <CardMedia
        className={classes.logo}
        image={require("../../media/aboutMeGraphic.png")}
        title="About Me Logo"
      />
      <Card className={classes.cardWrap}>
        <CardContent className={classes.card}>
          <CardMedia
            className={classes.img}
            image={require("../../media/headshot.jpg")}
            title="James' Headshot"
          />
          <Typography className={classes.text}>
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