import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DoughnutChart from "./Doughnut";
import { useTheme } from "@mui/material";

export default function MaxWidthDialog({ open, setOpen, toneData }) {
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const { palette } = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  return (
    <React.Fragment>
      <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={handleClose}>
        <DialogContent>
          <DoughnutChart
            height={300}
            data={toneData}
            color={[
              palette.primary.dark,
              palette.primary.main,
              palette.primary.light,
            ]}
          ></DoughnutChart>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
