import React from "react";

import { Typography } from "@material-ui/core";

function Datasource(props) {
  return (
    <React.Fragment>
      <Typography
        variant="subtitle2"
        align="left"
        color="textSecondary"
        gutterBottom
      >
        Data Sources:
      </Typography>
      <Typography variant="body2" align="left" color="textSecondary">
        DOH Philippines
      </Typography>

      <Typography variant="body2" align="left" color="textSecondary">
        Iloilo City Government
      </Typography>
      <Typography variant="body2" align="left" color="textSecondary">
        Iloilo City DRRMO
      </Typography>
    </React.Fragment>
  );
}

export default Datasource;
