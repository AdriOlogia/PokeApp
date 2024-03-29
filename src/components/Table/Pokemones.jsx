import React, { useState, useEffect, Fragment } from 'react'

/**
 * @des Consuming API
 */
import {PokemonsApi, PokeSprites} from '../Helpers/Pokemon.api'

/**
 * @desc Style-Component
 */
import {
  Content,
  ErrorBox,
  ErrorMessage,
  GridSprites,
  ImgSprits,
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
  Grid,
  TextField,
  FormControl
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Skeleton from '@mui/material/Skeleton';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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

  const emptyMessage = "Por favor, escribe un nombre de pokemon existente de la lista"
  const [pokelist, setPokelist] = useState([])
  const [finalResult, setFinalResult] = useState([])
  const [searchText, setSearchText] = useState("")
  const [Loading, setLoading] = useState(true)

  // Lista de pokemones al renderizar
  useEffect(() => {

    setTimeout(() => {
      PokemonsApi().then( results =>{
        setLoading(false)
        setPokelist( results.finalArray )
      } )     
    }, 1000);

    return () => {
      setLoading(true)
    }
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

  // body table
  const BodyRowFunction = ({name, id}) =>{    
    const [open, setOpen] = useState(false)
    const [sprites, setSprites] = useState({})
    const [SpritesType, setSpritesType] = useState([])
    return(
      <Fragment key={id}>
        <TableRow>
          <TableCell align='center'>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => {setOpen(!open), PokeSprites(name, setSprites, setSpritesType)}}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          {
            searchText.length > 0 ?
            <TableCell align="left">{name}</TableCell>:
            <>
            <TableCell align="center">{id + 1}</TableCell>
            <TableCell align="center">{name}</TableCell>
            </>
          }
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box alignItems="center" sx={{ margin: 1 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <GridSprites item xs={6}>
                    <ImgSprits src={sprites.front_default} alt={name} />
                  </GridSprites>
                  <GridSprites item xs={6}>
                    <ImgSprits src={sprites.back_default} alt={name} />
                  </GridSprites>
                  <GridSprites align="center" container spacing={2} >
                    <Grid item xs={12} style={{ marginBottom: -17 }}>
                      <Typography variant="caption" display="block" gutterBottom>type</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    {
                      SpritesType.map( itemType => ` ${itemType.type.name} `.toUpperCase() )
                    }
                    </Grid>
                  </GridSprites>
                </Grid>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </Fragment>                     
    )
  }

  return (
    <Content>
      <h1>Lista de pokemones</h1>
      {
        Loading ?
          <Box
            sx={{
              p: 8,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              minHeight: "100vh"
            }}
          >
            <Skeleton
              sx={{ bgcolor: 'grey.500', minHeight: "60vh" }}
              variant="rectangular"
              width={210}
              height={118}
            />
          </Box> :
          <TableContenido component={Paper}>
            {/* search */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => handleFinder(e)}
              />
            </Search>
            {/* Table */}
            {
              searchText.length > 0 && finalResult.length === 0 ?
                <ErrorBox>
                  <Typography variant="body">
                    <ErrorMessage>{emptyMessage}</ErrorMessage>
                  </Typography>
                </ErrorBox> :
                <Table>
                  {/* head */}
                  <TableHead>
                    <RootTableRow hover={true}>
                      <TableCell align='center'></TableCell>
                      {
                        searchText.length > 0 ?
                        <TableCell align="left">NUMERO</TableCell> :
                        <>
                        <TableCell align="center">NUMERO</TableCell>
                        <TableCell align="center">POKEMONES</TableCell>
                        </>
                      }
                    </RootTableRow>
                  </TableHead>
                  {/* body */}
                  <TableBody>
                    {
                      searchText.length > 0 ?
                        finalResult.map((name, id) => (
                          <BodyRowFunction name={name} id={id} key={id+name} />
                        )) :
                        pokelist.map((name, id) => (
                          <BodyRowFunction name={name} id={id} key={id+name} />
                        ))
                    }
                  </TableBody>

                </Table>
            }
          </TableContenido>
      }
    </Content>

  )
}

export default Pokemones