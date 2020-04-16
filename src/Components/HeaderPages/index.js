import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import "./styles.css";

import Logo from "../../assets/Logo.png";

export default function Header() {
  return (
    <header>
      <div className="container-header">
        <div className="linha1">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo PetShare" />
            </Link>
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Pets</a>
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
