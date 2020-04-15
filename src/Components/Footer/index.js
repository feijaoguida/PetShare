import React from "react";

import "./styles.css";
import Logo from "../../assets/Logo.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="colunas">
        <div className="coluna1">
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
        </div>
        <div className="coluna2">
          <p>Links para paginas</p>
          <ul>
            <li>Link1</li>
            <li>Link2</li>
            <li>Link3</li>
            <li>Link4</li>
          </ul>
        </div>
        <div className="coluna3">
          <p>Resumo</p>
        </div>
      </div>
      <div className="rodape">
        <p>Todos os direitos Reservados</p>
      </div>
    </div>
  );
}
