import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function FilterExhibition({exhName,exhData}) {
  return (
    <div className="FilterExhibition">
      {/* <h1>{exhName}</h1> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {exhData.map((data) => {
            return (
              <Grid item xs={12}>
                <Item className="EventsBlock">
                  <Card sx={{ boxShadow: 'none' }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                      </Typography>
                      <CardMedia
                        component="img"
                        height="194"
                        style={{
                          width: '50%',
                          margin: 'auto',
                        }}
                        image={`${data.imgSrc}`}
                        alt="Paella dish"
                      />
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        disabled={
                          data.status === 'Comming Soon' ||
                          data.status === 'Closed'
                            ? true
                            : false
                        }
                        variant="contained"
                        sx={{ backgroundColor: '#333' }}
                        onClick={() => alert('Booking Confirmed')}
                      >
                        {data.status === 'Comming Soon'
                          ? 'Booking Open Soon' 
                          : data.status === 'Closed'
                          ? 'Booking Closed'
                          : data.status === 'Booking Open'
                          ? 'Register Here'
                          : null}
                      </Button>
                    </CardActions>
                  </Card>
                  <p className="eLabel">{data.status}</p>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  )
}
