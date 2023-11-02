import { Card, Fab, Grid, Icon, lighten, styled, useTheme } from '@mui/material';

const ContentBox = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
}));

const FabIcon = styled(Fab)(() => ({
  width: '44px !important',
  height: '44px !important',
  boxShadow: 'none !important',
}));

const H3 = styled('h3')(({ textcolor }) => ({
  margin: 0,
  color: textcolor,
  fontWeight: '500',
  marginLeft: '12px',
}));

const H1 = styled('h1')(({ theme }) => ({
  margin: 0,
  flexGrow: 1,
  color: theme.palette.text.secondary,
}));

const Span = styled('span')(({ textcolor }) => ({
  fontSize: '13px',
  color: textcolor,
  marginLeft: '4px',
}));

const IconBox = styled('div')(() => ({
  width: 16,
  height: 16,
  color: '#fff',
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '300px ',
  justifyContent: 'center',
  '& .icon': { fontSize: '14px' },
}));

const StatCards2 = () => {
  const { palette } = useTheme();
  const textError = palette.error.main;
  const bgError = lighten(palette.error.main, 0.85);

  return (
    <Grid container spacing = {2}>
      <Grid item md={6}>
        <Card elevation={3} sx={{ p: 1 }}>
          <ContentBox>
            <FabIcon size="medium" sx={{ background: 'rgba(9, 182, 109, 0.15)' }}>
              <Icon sx={{ color: '#08ad6c' }}>trending_up</Icon>
            </FabIcon>
            <H3 textcolor={'#08ad6c'}>Followers</H3>
          </ContentBox>

          <ContentBox sx={{ pt: 2 }}>
            <H1>67.8k</H1>
            <IconBox sx={{ background: 'rgba(9, 182, 109, 0.15)' }}>
              <Icon className="icon">expand_less</Icon>
            </IconBox>
          </ContentBox>
        </Card>
      </Grid>
      <Grid item  md={6}>
        <Card elevation={3} sx={{ p: 1 }}>
          <ContentBox>
            <FabIcon size="medium" sx={{ background: 'rgba(9, 182, 109, 0.15)' }}>
              <Icon sx={{ color: '#08ad6c' }}>trending_up</Icon>
            </FabIcon>
            <H3 textcolor={'#08ad6c'}>Total Likes</H3>
          </ContentBox>

          <ContentBox sx={{ pt: 2 }}>
            <H1>2.9M</H1>
            <IconBox sx={{ background: 'rgba(9, 182, 109, 0.15)' }}>
              <Icon className="icon">expand_less</Icon>
            </IconBox>
          </ContentBox>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatCards2;
