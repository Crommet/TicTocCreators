import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
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
            <Img
              alt="Image"
              src="https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ae3cc911a70b487496875ff7ff1f95f2_1699738188?x-expires=1699826400&x-signature=KUbnypkDJm1hdPoZ3lKebZ4X4cs%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2023111122134969FDFCB8066385BF9243"
              component="img"
              sx={{
                height: 128,
                width: 72,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Video Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                Creator
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Categories
              </Typography>
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
