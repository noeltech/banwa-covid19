import React from "react";

import { Typography, Grid, List, ListItem } from "@material-ui/core";

const detailedCases = [
  { label: "Recovered", value: 1 },
  { label: "Suspect Case", value: 29 },
  { label: "Probable Case", value: 259 },
  { label: "Fatal", value: 1 },
];

function CaseSummary() {
  console.log("CaseSummary Renders");
  return (
    <React.Fragment>
      <Typography variant="h6" color="inherit">
        Total Confirmed Case:
      </Typography>

      <Typography variant="h3" color="secondary" align="center">
        5
      </Typography>

      <List>
        {detailedCases.map((detail) => (
          <React.Fragment key={detail.label}>
            <ListItem disableGutters dense>
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="body1" align="left">
                    {detail.label}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                  >
                    {detail.value}{" "}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
}

export default CaseSummary;
