import React from 'react'

/**
 * @desc Material ui
 */
import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

/**
 * @desc source
 */
import pokeImg from './Helpers/Pokebienvenidopng.png'


function CardPresentation() {
  return (

    <Card sx={{ marginTop: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="700"
          src={pokeImg}
          title='Bienvenido'
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BIENVENIDO
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Esta es una pagina para exponer una cierta cantidad de pokemones existentes en el mundo.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardPresentation