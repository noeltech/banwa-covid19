import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const detailedCases = [
  { label: "Total Reported PUM", value: 200 },
  { label: "PUI's", value: 3 },
  { label: "No. of PUM's who completed the 14 days quarantine", value: 177 },
  { label: "Total No of actively montored PUM's ", value: 13 },
];

export default function DistrictDetails({ district }) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {district}
        </Typography>

        {/* <List> */}
        <Grid
          container
          direction="row"
          alignContent="space-around"
          alignItems="center"
          justify="space-evenly"
        >
          {detailedCases.map((detail) => (
            <React.Fragment key={detail.label}>
              {/* <ListItem button disableGutters divider> */}
              {/* <Button variant="outlined" fullWidth={true}> */}
              <Grid item xs={"auto"}>
                <Typography variant="body1" align="left">
                  {detail.label}: {detail.value}
                </Typography>
                {/* <Typography variant="body1" align="left">
                {detail.value}
              </Typography> */}
              </Grid>

              {/* </Button> */}
              {/* </ListItem> */}
            </React.Fragment>
          ))}
        </Grid>
        {/* </List> */}
      </CardContent>
    </Card>
  );
}
