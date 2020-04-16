import React from "react";
import "../../src/App.css";
import { Container, Grid, Divider } from "@material-ui/core";
import CaseSummary from "./CaseSummary";
import PerDistrictSummary from "./PerDistrictSummary";
import Map from "./Map";
import Datasource from "./DataSources";

// import DistrictDetails from "./DistrictDetails";

function AppBody() {
  // const [district, setDistrict] = useState({ label: "", mapPosition: [] });
  console.log("AppBody Renders");
  return (
    <Grid container spacing={0} alignItems="stretch">
      <Grid item xs={12} sm={5} md={3} lg={2}>
        <div className="SidePanelSpacer">
          <CaseSummary />
          <div className="HorizontalSpacer"></div>
          <Divider />
          <div className="HorizontalSpacer"></div>
          <PerDistrictSummary />
          <div className="HorizontalSpacer"></div>
          <Datasource />
        </div>
      </Grid>

      <Grid item xs={12} sm={7} md={9} lg={10}>
        <Map />
      </Grid>
    </Grid>
  );
}

export default AppBody;
