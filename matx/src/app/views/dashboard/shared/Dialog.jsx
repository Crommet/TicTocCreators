import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DoughnutChart from "./Doughnut";
import { DialogTitle, useTheme } from "@mui/material";

export default function MaxWidthDialog({ open, setOpen, toneData, video }) {
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const { palette } = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };
  const colormap = {
    anger: "#cc0000",
    joy: "#00cc00",
    sadness: "#0000cc",
    disgust: "#505E3B",
    surprise: "#ECF307",
    fear: "#7B3FD5",
    other: "#7A7A7A",
    "Please wait...": "#3C0985",
  };
  const tonearray = toneData
    ? Object.entries(toneData).map(([name, value]) => {
        return { name, value };
      })
    : [
        {
          value: 100,
          name: "Please wait...",
        },
      ];
  const colors = tonearray.map(({ name, value }) => {
    return colormap[name];
  });

  return (
    <React.Fragment>
      <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={handleClose}>
        <DialogContent>
          <DialogTitle>
            {new Date(video.create_time * 1000).toDateString()}
          </DialogTitle>
          <DialogTitle>{video.title}</DialogTitle>
          <DoughnutChart
            height={300}
            data={tonearray}
            color={colors}
          ></DoughnutChart>
          <DialogTitle>Plays: {video.play_count}</DialogTitle>
          <DialogTitle>Likes: {video.digg_count}</DialogTitle>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
