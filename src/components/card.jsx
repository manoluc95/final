import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import origenDelVino from "../assets/imagenes/Origen-del-vino.jpg";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" src={origenDelVino} />
      <CardContent>
        <Typography gutterBottom variant="h5">Titulo</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Sub Titulo</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver</Button>
        <Button size="small">Info</Button>
      </CardActions>
    </Card>
  );
}