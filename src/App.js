/**
 * @description import react
 */
import react from "react";

/**
 * @description material ui
 */
import { Toolbar, Typography, Button, Container } from "@mui/material";

/**
 * @description styles components
 */
import { AppBarRoot, ItemNav } from "./app.style.js";

/**
 * @description react router
 */

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

/**
 * @description components para el nav
 */

import Inicio from "./contents/Inicio";
import Pokemones from "./components/Table/Pokemones.jsx";
import Constacto from "./components/Contacto.jsx";
import Presentacion from './components/Presentacion.jsx'


function App() {

  return (
    <Container>
      <Router>

        <AppBarRoot position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              PokeAPP
            </Typography>
            <Button color="inherit" component={NavLink} to="/" activeClassName="active" exact>
              Inicio
            </Button>
            <Button color="inherit" component={NavLink} to="/Pokemones" activeClassName="active" >
              Pokemones
            </Button>
            <Button color="inherit" component={NavLink} to="/contacto" activeClassName="active" >
              Contacto
            </Button>
          </Toolbar>
        </AppBarRoot>

        
        <Switch>
          <Router path="/Contacto">
            <Constacto />
          </Router>
        </Switch>

        <Switch>
          <Router path="/Pokemones">
            <Pokemones />
          </Router>
        </Switch>

        <Switch>
          <Router path="/" exact>
            <Presentacion />
          </Router>
        </Switch>

      </Router>
    </Container>
  );
}

export default App;
