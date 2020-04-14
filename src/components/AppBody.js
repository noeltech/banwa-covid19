import React from "react";
import "../../src/App.css";
import { Container, Grid, Divider } from "@material-ui/core";
import CaseSummary from "./CaseSummary";
import PerDistrictSummary from "./PerDistrictSummary";
import Map from "./Map";
// import DistrictDetails from "./DistrictDetails";

function AppBody() {
  // const [district, setDistrict] = useState({ label: "", mapPosition: [] });
  console.log("AppBody Renders");
  return (
    <Container color="primary" maxWidth="xl" disableGutters>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={5} md={3} lg={2}>
          <div className="SidePanelSpacer">
            <CaseSummary />
            <div className="HorizontalSpacer"></div>
            <Divider />
            <div className="HorizontalSpacer"></div>
            <PerDistrictSummary />
          </div>
        </Grid>

        <Grid item xs={12} sm={7} md={9} lg={10}>
          {/* <div className="absoluteContainer">
              <DistrictDetails district={district.label} />
            </div> */}
          <Map />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AppBody;
