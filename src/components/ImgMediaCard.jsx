import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function ImgMediaCard({ image, title, description, link }) {
  return (
    <Card sx={{ maxWidth: 600, m: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ borderRadius: '2px 2px 0 0' }}
      />
      <CardContent sx={{ backgroundColor: '#D2B48C' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <NavLink to={link} style={{ textDecoration: 'none' }}>
          <Button size="small" variant="contained" color={"secondary"}>
            Aprender más
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;
