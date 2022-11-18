/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";


import { Button, Row, Col } from "reactstrap";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";
import MDAvatar from "../../../../components/MDAvatar";

// Material Dashboard 2 React base styles
import breakpoints from "../../../../assets/theme/base/breakpoints";

// Images
import burceMars from "../../../../assets/images/bruce-mars.jpg";
import backgroundImage from "../../../../assets/images/bg-profile.jpeg";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import styles from "../../../../assets/styles/profile.scss";

function Header({ children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
                <Box>
                    <div className={styles.card_profile_image_container}>
                        <div className={styles.card_profile_image}>
                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                <Grid item>
                                    <MDAvatar src={require("../../../../assets/images/team-4-800x800.jpg")}
                                              alt="profile-image" size="xl" shadow="sm" />
                                </Grid>
                            </a>
                        </div>
                    </div>
                </Box>
                <Box>
                    <Grid item xs={2}>
                        <Button
                            className="mr-4"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                        >Content</Button>
                    </Grid>
                    <Grid item xs={8}>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            className="mr-4"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                        >Message</Button>
                    </Grid>
                </Box>
                <Box><div className="card-profile-stats d-flex justify-content-center">
                    <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                    </div>
                    <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                    </div>
                    <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                    </div>
                </div>
                </Box>
            </Grid>
            <Grid item xs={12}>

                <div className="text-center mt-5">
                    <h3>
                        Jessica Jones{" "}
                        <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                        <i className="ni location_pin mr-2" />
                        Bucharest, Romania
                    </div>
                    <div className="h6 mt-4">
                        <i className="ni business_briefcase-24 mr-2" />
                        Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                        <i className="ni education_hat mr-2" />
                        University of Computer Science
                    </div>
                </div>
            </Grid>

            <div className="mt-5 py-5 border-top text-center">
                <div className="justify-content-center">
                    <div lg="9">
                        <p>
                            An artist of considerable range, Ryan — the name taken
                            by Melbourne-raised, Brooklyn-based Nick Murphy —
                            writes, performs and records all of his own music,
                            giving it a warm, intimate feel with a solid groove
                            structure. An artist of considerable range.
                        </p>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Show more
                        </a>
                    </div>
                </div>
            </div>
        </Grid>
      </Card>
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
