import React from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./footer.css"



const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
          <div className="contact">
        <ul id="footer">
          <li>Contact Us:</li>
          <li id="number">Phone: <br/>336-555-1155</li>
          <li>Email: Sweetsnaxtreats@gmail.com</li>
        </ul>
      </div>
      <ul id="social">
        <li id="socialText">Social Media:</li>
        <li id="facebook">
          <a href="https://www.facebook.com/sweetsnaxtreats/">
            <BottomNavigationAction
              label="Facebook"
              icon={<FacebookIcon fontSize="large" color="primary" />}
            />
          </a>
        </li>
        <li id="instagram">
          <a href="https://www.instagram.com/sweetsnaxtreats/">
            <BottomNavigationAction
              label="Instagram"
              icon={<InstagramIcon fontSize="large" color="primary" />}
            />
          </a>
        </li>
      </ul>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
