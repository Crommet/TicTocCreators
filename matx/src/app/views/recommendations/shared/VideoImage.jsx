import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box } from "@mui/material";

function nFormatter(num, digits) {
  if (num === null) return null;

  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid({ video }) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "100%",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 100, height: 100 }}>
            <a href={`https://www.tiktok.com/@${video.author.unique_id}/video/${video.video_id}`}>
            <Img
              alt="Image"
              src={video.cover}
              component="img"
              sx={{
                height: 98,
                width: 60,
                borderRadius: "5%",
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
            />
            </a>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {video.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {video.author.nickname}
              </Typography>
              {<Typography variant="body2" color="text.secondary">
                Views: {nFormatter(video.play_count, 2) }
              </Typography>}
              {<Typography sx={{ cursor: "pointer" }} variant="body2" color="text.secondary">
                Likes {nFormatter(video.digg_count, 2)}
              </Typography>}
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div"></Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
