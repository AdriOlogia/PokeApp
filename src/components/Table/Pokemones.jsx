import React, { useState, useEffect } from 'react'

/**
 * @des Consuming API
 */
import Pokemons from '../Helpers/Pokemon.api'

/**
 * @desc Style-Component
 */
import {
  Content,
  ErrorBox,
  ErrorMessage,
  RootTableRow,
  TableContenido,
} from './Pokemones.style'

/**
 * @des Material UI
 */
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  InputBase,
  Typography,
  Box,
  TextField
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Skeleton from '@mui/material/Skeleton';

const Search = styled('div')(({ theme }) => ({
  marginTop: '10px',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

// render
const Pokemones = () => {

  const [pokelist, setPokelist] = useState([])
  const [searchText, setSearchText] = useState("")
  const [finalResult, setFinalResult] = useState([])
  const [emptyMessage, setEmptyMessage] = useState("Por favor, escribe un nombre de pokemon existente")
  
  // Lista de pokemones al renderizar
  useEffect(() => {
    Pokemons().then(items => {
      setPokelist(items)
    })
  }, [])

  useEffect(() => {
    const filterResult = pokelist.filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    )
    setFinalResult(filterResult)

  }, [searchText])

  const handleFinder = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <Content>
      <h1>Lista de pokemones</h1>

      <TableContenido component={Paper}>
        {/* search */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => handleFinder(e)}
          />
        </Search>
        {/* final search */}
        {/* Table */}
        {
          searchText.length > 0 && finalResult.length === 0 ?
            <ErrorBox>
              <Typography variant="body">
                <ErrorMessage>{emptyMessage}</ErrorMessage>
                <Skeleton animation="wave" />
                <Skeleton />
              </Typography>
            </ErrorBox> :
            <Table>
              {/* header */}
              <TableHead>
                <RootTableRow>
                  <TableCell align="center">NUMERO</TableCell>
                  <TableCell align="center">POKEMONES</TableCell>
                </RootTableRow>
              </TableHead>
              {/* body */}
              <TableBody>
                {
                  searchText.length > 0 ?
                    finalResult.map((row, key) => (
                      <TableRow
                        key={row}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {key + 1}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {row}
                        </TableCell>
                      </TableRow>
                    )) :
                    pokelist.map((row, key) => (
                      <TableRow
                        key={row}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {key + 1}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {row}
                        </TableCell>
                      </TableRow>
                    ))
                }
              </TableBody>
            </Table>
        }
      </TableContenido>
    </Content>

  )
}

export default Pokemones