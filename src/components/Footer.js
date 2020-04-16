import React from "react";
import "../../src/App.css";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
// import DistrictDetails from "./DistrictDetails";
import Banwa from ".././banwa_footer.png";

function Footer() {
  // const [district, setDistrict] = useState({ label: "", mapPosition: [] });
  console.log("Footer Renders");
  return (
    <Wrapper>
      <Grid container alignItems="stretch" alignContent="center">
        <Grid item xs={6}>
          <PoweredBy>
            <Label> Powered by:</Label>
            <BanwaLink href="https://www.facebook.com/banwa.ph/">
              <BanwaImage src={Banwa} alt="Banwa FB link" />
            </BanwaLink>
          </PoweredBy>
        </Grid>

        <Grid item xs={6}>
          <Copyright>
            &copy; Copyright 2020 Banwa.tech All Rights Reserved
          </Copyright>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default Footer;

const PoweredBy = styled.div``;

const Copyright = styled.small`
  color: #f5f5f5;
`;

const BanwaLink = styled.a`
  display: inline-block;
`;

const BanwaImage = styled.img`
  width: 100px;
  height: 14px;
  margin-left: 8px;
  margin-bottom: -2px;
`;

const Label = styled.small`
  color: #f5f5f5;
`;

const Wrapper = styled.div`
  background-color: #263238;
  padding: 6px 0;
`;
