import React from "react";
import Logo from ".././logo.png";

import { Container, AppBar, Typography, Toolbar } from "@material-ui/core";

function AppHeader() {
  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
        {/* to center elements */}
        <Container maxWidth="xl">
          <Toolbar variant="dense">
            <img src={Logo} alt="website logo" className="logo" />
            <Typography variant="h5" color="inherit">
              Covid-19 Status in Iloilo City
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}

export default AppHeader;
