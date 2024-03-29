import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";

import Logo from "../../assets/Logo.png";

export default function Header() {
  return (
    <header>
      <div className="container-header">
        <div className="linha1">
          <div className="logo">
            <img src={Logo} alt="Logo PetShare" />
            <div className="texto-logo">
              <p>
                {" "}
                <strong>PetShare</strong>{" "}
              </p>
              <p>
                <span>Mais que um Pet, Família</span>
              </p>
            </div>
          </div>
          <div className="itens-header">
            <div className="pesquisar">
              <input type="text" name="pesquisar" id="pesquisar" />
              <button>
                {"    "}
                <FiSearch />
                {"    "}
              </button>
            </div>
            <div className="links-header">
              <Link className="link-header" to="/CadastroUsuario">
                Cadastre-se
              </Link>
              <Link className="link-header" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="linha2">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <Link to="/ListaParceiros">Pets</Link>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
