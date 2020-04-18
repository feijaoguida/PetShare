import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

import Logo from "../../assets/petBixanoLogo.png";

export default function Header() {
  return (
    <header>
      <div className="containerParceiro-header">
        <div className="linha1">
          <div className="logo">
            <img src={Logo} alt="Logo PetShare" />
            <div className="texto-logo">
              <p>
                {" "}
                <strong>PetFeliz</strong>{" "}
              </p>
              <p>
                <span>Seu Pet No Lugar Certo!!!</span>
              </p>
            </div>
          </div>
          <div className="itens-header"></div>
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
