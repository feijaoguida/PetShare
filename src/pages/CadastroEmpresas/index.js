import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";
import Header from "../../Components/HeaderPages";
import Footer from "../../Components/Footer";

export default function CadastroEmpresa() {
  const history = useHistory();

  return (
    <>
      <Header></Header>
      <div className="body-container">
        <div className="cadE-container">
          <div className="cadE-titulo titulo-paragrafo">
            <p>Cadastro Parceiros</p>
          </div>
          <div className="cadE-formulario">
            <form action="">
              <div className="cadE-campo wrap-input100">
                <input type="text" name="nome" id="nome" placeholder="Nome:" />
                <span className="focus-input100"></span>
              </div>

              <div className="cadE-campo wrap-input100">
                <input
                  type="text"
                  name="endereco"
                  id="endereco"
                  placeholder="Endereço:"
                />
                <span className="focus-input100"></span>
              </div>

              <div className="cadE-campo wrap-input100">
                <input
                  type="text"
                  name="telefone"
                  id="telefone"
                  placeholder="Telefone:"
                />
                <span className="focus-input100"></span>
              </div>

              <div className="cadE-campo wrap-input100">
                <input
                  type="text"
                  name="estado"
                  id="estado"
                  placeholder="Estado:"
                />
                <span className="focus-input100"></span>
              </div>

              <div className="cadE-campo wrap-input100">
                <input
                  type="text"
                  name="cidade"
                  id="cidade"
                  placeholder="cidade:"
                />
                <span className="focus-input100"></span>
              </div>

              <div className="cadE-campo wrap-input100">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email:"
                />
                <span className="focus-input100"></span>
              </div>

              <div className="cadE-button">
                <button>Cancelar</button>
                <button>Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
