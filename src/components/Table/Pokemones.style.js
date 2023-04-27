/**
 * @des style Material UI
*/
import {  } from 'react';
import { Box, InputBase, TableRow } from '@mui/material';
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
    margin-bottom: 20px;
`

export const TableContenido = styled( TableContainer )`
    width: 35vw;
`

export const TableRoot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RootTableRow = styled( TableRow )`
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

export const ErrorBox = styled( Box )`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`