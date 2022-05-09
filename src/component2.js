import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import datas from './data';



const ResponsiveAppBar = (props) => {
  var data=(datas);
  return (
  <div style={{padding:"10px"}}>
    <Grid container spacing={2}>
      {data.map((ele)=>{
        return(
          <Grid item xs={3}>
              <Card sx={{ minWidth: 275 }} style={{width:"20px"}}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {ele.name}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {ele.price}
                  </Typography>
                  <Typography variant="body2">
                    <img src={ele.image} style={{width:"200px",height:"200px"}}></img>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" style={{ color: 'black', border: '1px solid black', textTransform: 'capitalize' }} onClick={(e)=>props.toggle(e,ele.id)} >Add to cart</Button>
                </CardActions>
              </Card>
          </Grid>
        );
      })}
      </Grid>
  </div>
  );
};

export default ResponsiveAppBar;

{/* */}




