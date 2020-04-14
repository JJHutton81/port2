import React, { useState } from "react";

import { useSpring, animated as a } from "react-spring";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40%",
    // maxWidth: "300px",
    display: "flex",
    flexDirection: "Column",
    alignItems: "center",
    justifyItems: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    margin: "5%",
  },
  projImg: {
    width: "300px",
    height: "300px",
    position: "absolute",
  },
  glogo: {
    width: "160px",
    height: "50px",
  }
}));
const CardBody = (props) => {
  const classes = useStyles();
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <Card
      className={classes.root}
      onMouseEnter={() => set((state) => !state)}
      onMouseLeave={() => set((state) => !state)}
    >
      <CssBaseline />
      <a.div
        className={classes.projImg}
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <Typography className={classes.title}>{props.card.headline}</Typography>
        <CardMedia className={classes.projImg}>
          <a href={props.card.plink} target="_blank" rel="noopener noreferrer">
            <img
              style={{ maxWidth: "100%", maxHeight: "300px" }}
              src={props.card.img}
              alt="Project Screenshot"
            />
          </a>
        </CardMedia>
      </a.div>
      <a.div
        className="front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <CardContent>
          <Typography>{props.card.text}</Typography>
          <Typography>{props.card.stack}</Typography>
          <ul>
            <li>{props.card.bullet1}</li>
            <li>{props.card.bullet2}</li>
            <li>{props.card.bullet3}</li>
          </ul>
          <Typography>View repository on</Typography>
          <a href={props.card.rlink} target="_blank" rel="noopener noreferrer">
            <CardMedia
              className={classes.glogo}
              image={require("../../media/GitHub_Logo.png")}
              title="GitHub Logo"
            />
          </a>
        </CardContent>
      </a.div>
    </Card>
  );
};

export default CardBody;
