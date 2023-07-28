import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiFillHome } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "30px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  searchButton: {
    marginLeft: theme.spacing(2),
  },
  comingSoonWrapper: {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "calc(100vh - 64px)", // minus the height of the navbar
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  comingSoonContent: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    textAlign: "center",
  },
}));
export default function Home() {
  const classes = useStyles();

  return (
    <>
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3%",
        }}
      >
        <h1>Bienvenue à HarmonyStore</h1>
      </div>
      <div className={classes.comingSoonWrapper}>
        <div className={classes.comingSoonContent}>
          <Typography variant="h2" gutterBottom>
            Coming Soon...
          </Typography>
          <Typography variant="h5" paragraph>
            Website under construction
          </Typography>
          <Typography variant="body1" gutterBottom>
            <BsFillTelephoneFill /> +216 54 154 220
          </Typography>
          <Typography variant="body1" gutterBottom>
            <AiOutlineMail /> Malek2013malek@hotmail.fr
          </Typography>
          <Typography variant="body1" gutterBottom>
            <AiFillHome /> Impasse bir sidi tayeb sidi bou said 2026
          </Typography>
          <div className="socialmedia">
            <Typography variant="body1" gutterBottom>
              <a
                href="https://www.facebook.com/HarmonyStore01?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook fontSize="40px" />
              </a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a
                href="https://instagram.com/harmony_store01?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram fontSize="40px" />
              </a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a
                href="http://tiktok.com/@harmonystore01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok fontSize="40px" />
              </a>
            </Typography>
          </div>
        </div>
      </div>
    
    </div>
    
      <div className="card1">
  <div className="image1">
    <img src="https://cdn.pixabay.com/photo/2019/01/12/16/21/breakfast-3928800_960_720.jpg" alt="img" />
  </div>
  <div className="subscribe1">
  <h2>Découvrez les Dernières Tendances en Bijoux et Accessoires</h2>
<p>Restez à la mode avec les tendances en bijoux et accessoires les plus en vogue. Abonnez-vous à notre newsletter Bijoux&Accessoires.</p>
    
      <input type="email" name="email" id="email" placeholder="Enter your email address" autocomplete="off" />
      <button type="button">Subscribe</button>
    
  </div>
</div>
    </>
  );
}
