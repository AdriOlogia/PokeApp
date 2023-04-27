import React from 'react'

/**
 * @desc Material ui
 */
import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

function CardPresentation({ titulo, mensaje, img }) {
  return (

    <Card sx={{ marginTop: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="700"
          src={ img } 
          title='Bienvenido'
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { titulo }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { mensaje }
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardPresentation