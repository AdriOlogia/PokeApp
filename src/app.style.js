/**
 * @description Estilos base para la APP
 */



/**
 * @description material ui imports
 */
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
