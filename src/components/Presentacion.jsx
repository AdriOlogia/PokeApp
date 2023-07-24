import React from 'react'

/**
 * @des modules
 */
import CardPresentation from './Card/CardPresentation'
/**
 * @desc source
 */
import pokeImg from './assets/Pokebienvenidopng.png'

function Presentacion() {
  return (
    <>
    <CardPresentation 
        titulo={"BIENVENIDOS"} 
        mensaje={"Esta es una pagina para exponer una cierta cantidad de pokemones existentes en el mundo."} 
        img={ pokeImg }/>
    </>
  )
}

export default Presentacion