import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroEmpresa from "./pages/CadastroEmpresas";
import ListaParceiros from "./pages/ListaParceiros";
import Parceiros from "./pages/Parceiros";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastrousuario" component={CadastroUsuario} />
        <Route path="/cadastroempresa" component={CadastroEmpresa} />
        <Route path="/listaparceiros" component={ListaParceiros} />
        <Route path="/parceiros" component={Parceiros} />
      </Switch>
    </BrowserRouter>
  );
}
