import { Card, Grid, styled, useTheme, Fab, Icon } from "@mui/material";
import { Fragment } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect } from "react";
import { useState } from "react";
import { StaticDatePicker } from "@mui/lab";
import VideoImage from "./shared/VideoImage.jsx";
const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
}));

const Recommendations = ({ recs }) => {
  return (
    <Fragment>
      <ContentBox className="analytics">
        <Card />
        <br></br>
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            {recs.map((video) => (
              <div>
                <VideoImage video={video} /> <br></br>
              </div>
            ))}
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Recommendations;
