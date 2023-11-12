import { Card, Grid, styled, useTheme } from "@mui/material";
import { Fragment } from "react";
import StatCards2 from "./shared/StatCards2";
import VideosTable from "./shared/VideosTable";
import LineChart from "./shared/LineChart";
import { useEffect, useState } from "react";
import DoughnutChart from "./shared/Doughnut";

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

const url = "http://127.0.0.1:8000/tonedetection/comments?";

const Analytics = ({ videos, user }) => {
  const { palette } = useTheme();

  const [data, setData] = useState(null);

  const updateSelected = async (id) => {
    const response = await fetch(url + new URLSearchParams({ id }));
    const json = await response.json();
    setData(json);
  };

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Card />

        <LineChart
          height="200px"
          color={[
            palette.primary.dark,
            palette.primary.main,
            palette.primary.light,
          ]}
          videos={videos}
        />
        <br></br>
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <VideosTable videos={videos} setSelected={updateSelected} />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <StatCards2 user={user} />
            <DoughnutChart
              height={300}
              data={data}
              color={[
                palette.primary.dark,
                palette.primary.main,
                palette.primary.light,
              ]}
            />
            <br />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
