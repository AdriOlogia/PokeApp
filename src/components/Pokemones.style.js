/**
 * @des style Material UI
*/
import { Fragment } from 'react';
import { InputBase, TableRow } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import styled from 'styled-components';
import { Search } from '@mui/icons-material';


/**
 * @desc styled component
 */

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TableContenido = styled( TableContainer )`
    width: 20vw;
`

export const TableRoot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RootTableRow = styled( TableRow )`
    display: flex;
    justify-content: center;
    align-content: center;
`

export const ErrorMessage = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    padding: 20px;
    text-align: center;
    margin: 5px 10px;
`