import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import Link from "@mui/material/Link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavBar from "../NavBar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  landingpage: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1616410011236-7a42121dd981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')`,
    height: "900px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3rem",
    },
  },
  centerContainer: {
    paddingTop: theme.spacing(3),
    marginTop: "80px",
  },
  centerTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
    marginTop: "80px",
    marginBottom: "100px",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  LocalAtmIcon: {
    color: "#2E86C1",
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div className="landingpage">
      <NavBar />
      <Box className={classes.landingpage}>
        <Box>GIVING NEW LIFE TO USED SMARTPHONES & OTHER DEVICES</Box>
      </Box>
      <Container maxWidth="lg" className={classes.centerContainer}>
        <Typography
          variant="h4"
          fontStyle="italic"
          className={classes.centerTitle}
        >
          Trade-In your device for cash
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p">
          Save up to $800 with the latest carrier deals and eligible trade-in.
          Terms apply. Shop early for the best selection of holiday favorites.
          3% cash back w/Apple Card. Your data stays safe. Extended holiday
          returns. Prepaid mail-in kit. Free shipping or pickup.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            {/* ................................................................................................ */}
            <Card className={classes.card} elevation="24">
              <CardMedia
                className={classes.media}
                component="img"
                height="140"
                image="https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="iphone 13"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  iPhone 12 Max Pro
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="p"
                >
                  iPhone 12. The most advanced dual-camera system ever on
                  iPhone. Lightning-fast A15 Bionic chip. A big leap in battery
                  life. Durable design. Superfast 5G.1 And a brighter Super
                  Retina XDR display.
                </Typography>
              </CardContent>
              <CardActions className={classes.CardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1610128980054-68d94619e243?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80" />
                </Box>
                <Box className={classes.LocalAtmIcon}>
                  <LocalAtmIcon />
                </Box>
              </CardActions>
            </Card>
            {/* ................................................................................................ */}
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            {/* ................................................................................................ */}
            <Card className={classes.card} elevation="24">
              <CardMedia
                className={classes.media}
                component="img"
                height="150"
                image="https://images.unsplash.com/photo-1589062612200-0cc1f7f78fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
                alt="iphone 12"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  iPhone 12
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="p"
                >
                  iPhone 12. 5G to download movies on the fly and stream
                  high-quality video. Beautifully bright 6.1-inch Super Retina
                  XDR display. Ceramic Shield with 4x better drop performance.
                </Typography>
              </CardContent>
              <CardActions className={classes.CardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://www.att.com/ecms/dam/att/consumer/global/logos/att_globe_500x500.jpg" />
                </Box>
                <Box className={classes.LocalAtmIcon}>
                  <LocalAtmIcon />
                </Box>
              </CardActions>
            </Card>
            {/* ................................................................................................ */}
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            {/* ................................................................................................ */}
            <Card className={classes.card} elevation="24">
              <CardMedia
                className={classes.media}
                component="img"
                height="150"
                image="https://images.unsplash.com/photo-1636388446054-b8fced977df1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=691&q=80"
                alt="iphone 11"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  iPhone 11
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="p"
                >
                  Shoot 4K videos, beautiful portraits, and sweeping landscapes
                  with the all-new dual-camera system. Capture your best
                  low-light photos with Night mode. See true-to-life color in
                  your photos, videos.
                </Typography>
              </CardContent>
              <CardActions className={classes.CardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://newsroom.ibm.com/image/Verizon%2B1200x627.png" />
                </Box>
                <Box className={classes.LocalAtmIcon}>
                  <LocalAtmIcon />
                </Box>
              </CardActions>
            </Card>
            {/* ................................................................................................ */}
          </Grid>
        </Grid>
      </Container>
      {/* .................................................FQA'S............................................... */}

      <Box paddingTop="20px" paddingBottom="40px" bgcolor="#EAECEE">
        <Box>
          <Typography gutterBottom variant="h5" component="h2" fontWeight="700">
            FQA'S
          </Typography>
          <Typography
            paddingBottom="40px"
            variant="body2"
            color="text.secondary"
            component="p"
          >
            Frequently Asked Questions -
          </Typography>

          <Accordion elevation="20">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What to do with phone when trading it in?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Before you sell, give away, or trade in your device, you should
                first transfer information to your new device, then remove your
                personal information from your old device.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation="20">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                Should I factory reset my phone before trading in?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Before you trade in your old phone, it's important to properly
                wipe the data clean. A factory reset will work, so long as you
                encrypt the phone first. For Android users, if you existing
                phone runs Android 6.0 (Marshmallow) or newer, your data will
                already be encrypted by default. So, you're good..
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation="20">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>
                Should I remove the SIM card before trading in my phone?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To be extra safe, it's a good idea to remove your SIM card,
                which may contain your phone number, security information and
                billing info. ... Take out the SIM card and replace the tray.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation="20">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Can I get my trade in phone back?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Device trade-in transactions are final. After you accept the
                trade-in credit and send us your phone, you cannot get it back.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation="20">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Is it safe to sell your old phone?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                It is safe to sell old devices like smartphones or laptops only
                once they have been properly cleaned of important data, which
                one does not want to be exposed. ... According to Kaspersky
                Labs, wiping not just deletes the data, but also overwrites old
                files with random data multiple times.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

      {/* ...............................................FOOTER................................................. */}
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#212F3D"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact Us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy Policy
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Messages</Box>
              <Box>
                <Link href="/" color="inherit">
                  Back Up
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            By Richard Casanova, Camilo Espinosa and David Landes &reg;{" "}
            {new Date().getFullYear()}.
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default LandingPage;
