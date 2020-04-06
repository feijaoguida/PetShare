import React from "react";

import "./styles";

export default function Header() {
  return (
    <header>
      <div className="container-header">
        <div className="linha1">
          <div className="logo">logo</div>
          <div className="itens-header">
            <div className="pesquisar">
              <input type="text" name="pesquisar" id="pesquisar" />
              <input type="button" value="submit" />
            </div>
            <div className="links-header">
              <a href="#" className="link-header">
                Cadastre-se
              </a>
              <a href="#" className="link-header">
                Login
              </a>
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
