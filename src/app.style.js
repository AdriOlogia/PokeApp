/**
 * @description Estilos base para la APP
 */



/**
 * @description material ui imports
 */
import { AppBar } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';


/**
 * @description exportaciones de estilos
 */

export const ItemNav = styled( NavLink )`
    margin: 5px 10px;
    color: black;
    &:hover{
        color: greenyellow;
    }
`

export const AppBarRoot = styled( AppBar )`
    background-color: #0b233b !important;
`
