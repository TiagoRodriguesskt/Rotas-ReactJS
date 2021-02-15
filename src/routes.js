import React from "react";
import { isAuthenticated } from "./auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={prosp =>
      isAuthenticated() ? (
        <Component {...prosp} /> /**VERIFICANDO SE USUARIO TEM AUTORIZAÇÃO */
      ) : (
        <Redirect
          to={{ pathname: "/", state: { from: prosp.location } }}
        /> /**SE NÃO TEM AUTORIZAÇÃO, VOLTAR PARA A PÁGINA PRINCIPAL */
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Hello World!</h1>} />
      <PrivateRoute
        path="/app"
        component={() => <h1>Parabéns, está tudo certo!</h1>}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
