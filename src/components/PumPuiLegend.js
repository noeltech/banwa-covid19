import React from "react";
import styled from "styled-components";

import { Typography, List, ListItem, Card } from "@material-ui/core";

const legend = [
  { label: "Suspected", color: "#f2a365" },
  {
    label: "Probable",
    color: "#30475e",
  },
];
function PumPuiLegend(props) {
  return (
    <React.Fragment>
      <Wrapper>
        <Card>
          <List>
            {legend.map((detail) => (
              <React.Fragment key={detail.label}>
                <ListItem>
                  {/* Circle svg */}
                  <Symbol>
                    <circle cx="10" cy="10" r="10" fill={detail.color} />
                  </Symbol>
                  {/* legend label */}
                  <Typography variant="body2" align="left">
                    {detail.label}
                  </Typography>

                  {/* </Button> */}
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Card>
      </Wrapper>
    </React.Fragment>
  );
}

export default PumPuiLegend;

const Wrapper = styled.div`
  position: absolute;
  bottom: 28px;
  right: 10px;
  z-index: 10;
`;

const Symbol = styled.svg`
  height: 20px;
  width: 20px;
  margin-right: 6px;
`;
