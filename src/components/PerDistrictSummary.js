import React from "react";

import { Typography, Grid, List, ListItem } from "@material-ui/core";

const detailedCases = [
  { label: "Arevalo", value: 0, pum: 17, center: [122.525, 10.692] },
  { label: "Jaro", value: 11, pum: 107, center: [122.541, 10.693] },
  { label: "Lapaz", value: 0, pum: 24, center: [122.567, 10.699] },
  { label: "Lapuz", value: 0, pum: 51, center: [122.553, 10.723] },
  { label: "Mandurriao", value: 7, pum: 11, center: [122.526, 10.71] },
  { label: "Molo", value: 0, pum: 5, center: [122.575, 10.729] },
  { label: "City Proper", value: 1, pum: 2, center: [122.553, 10.723] },
  { label: "Jubilee Hall", value: 24, pum: 28, center: [122.567, 10.699] },
];

function PerDistrictSummary(props) {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={5}>
          <Typography variant="body2" align="left" color="textSecondary">
            District
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" align="left" color="textSecondary">
            Suspect
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body2" color="textSecondary">
            Probable
          </Typography>
        </Grid>
      </Grid>
      <div className="scrollableList">
        <List>
          {detailedCases.map((detail) => (
            <React.Fragment key={detail.label}>
              <ListItem
                disableGutters
                divider
                // onClick={() => {
                //   props.setDistrict({
                //     label: detail.label,
                //     mapPosition: detail.center,
                //   });
                // }}
              >
                {/* <Button variant="outlined" fullWidth={true}> */}
                <Grid container>
                  <Grid item xs={5}>
                    <Typography variant="body2" align="left">
                      {detail.label}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="body1"
                      align="center"
                      color="textSecondary"
                    >
                      {detail.value}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant="body1"
                      align="center"
                      color="textSecondary"
                    >
                      {detail.pum}
                    </Typography>
                  </Grid>
                </Grid>
                {/* </Button> */}
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </div>
    </React.Fragment>
  );
}

export default PerDistrictSummary;
