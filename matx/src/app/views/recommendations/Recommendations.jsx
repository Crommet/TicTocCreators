import { Card, Grid, styled, useTheme, Fab, Icon } from '@mui/material';
import { Fragment } from 'react';
import DoughnutChart from './shared/Doughnut';
import StatCards2 from './shared/StatCards2';
import TopSellingTable from './shared/TopSellingTable';
import LineChart from '../dashboard/shared/LineChart';
import AppButton from '../material-kit/buttons/AppButton';
import SimpleCheckbox from '../material-kit/checkbox/SimpleCheckbox';
import AppCheckbox from '../material-kit/checkbox/AppCheckbox';
import LabelledCheckbox from '../material-kit/checkbox/LabelledCheckbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';
import { useState } from 'react';
import { StaticDatePicker } from '@mui/lab';
import VideoImage from './shared/VideoImage.jsx';
const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

const Analytics = () => {
  const { palette } = useTheme();
const [Checkboxtech,setcheckboxtech] = useState(true)
console.log(Checkboxtech)
const [Checkboxlive,setcheckboxlive] = useState(true)
console.log(Checkboxlive)
const [Checkboxfood,setcheckboxfood] = useState(true)
console.log(Checkboxfood)
const [checkboxfit,setcheckboxfit] = useState(true)
console.log(checkboxfit)
const [Checkboxbeau,setcheckboxbeau] = useState(true)
console.log(Checkboxbeau)
const [Checkboxgames,setcheckboxgames] = useState(true)
console.log(Checkboxgames)

  return (

    <Fragment>
      <ContentBox className="analytics">
        <Card/>
        <br></br>
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
           
            <VideoImage />
            <VideoImage />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Categories</Title>
             

              <FormControlLabel
        control={
          <Checkbox
            checked={Checkboxtech}
            onChange={()=> setcheckboxtech(!Checkboxtech)}
            value="checkedB"
            color="primary"
          />
        }
        label="Technology"
      />

        
<FormControlLabel
        control={
          <Checkbox
            checked={Checkboxlive}
            onChange={()=> setcheckboxlive(!Checkboxlive)}
            value="checkedB"
            color="primary"
          />
        }
        label="Entertainment"
      />

<FormControlLabel
        control={
          <Checkbox
            checked={Checkboxfood}
            onChange={()=> setcheckboxfood(!Checkboxfood)}
            value="checkedB"
            color="primary"
          />
        }
        label="Dance"
      />

<FormControlLabel
        control={
          <Checkbox
            checked={checkboxfit}
            onChange={()=> setcheckboxfit(!checkboxfit)}
            value="checkedB"
            color="primary"
          />
        }
        label="Fitness and Sports"
      />

<FormControlLabel
        control={
          <Checkbox
            checked={Checkboxbeau}
            onChange={()=> setcheckboxbeau(!Checkboxbeau)}
            value="checkedB"
            color="primary"
          />
        }
        label="Beauty and Skincare"
      />

<FormControlLabel
        control={
          <Checkbox
            checked={Checkboxgames}
            onChange={()=> setcheckboxgames(!Checkboxgames)}
            value="checkedB"
            color="primary"
          />
        }
        label="Videogames"
      />


            </Card>
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
