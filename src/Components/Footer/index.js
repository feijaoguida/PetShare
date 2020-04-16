import React from "react";
import { FiFacebook, FiTwitter } from "react-icons/fi";

import "./styles.css";
import Logo from "../../assets/Logo.png";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="colunas">
        <div className="coluna1">
          <div className="logoRodape">
            <img src={Logo} alt="Logo PetShare" />
            <div className="texto-logoRodape">
              <p>
                {" "}
                <strong>PetShare</strong>{" "}
              </p>
              <p>
                <span>Mais que um Pet, Família</span>
              </p>
            </div>
          </div>
          <div className="nossaRedes">
            <FiFacebook color="#5D62B5" size={30} />
            <FiTwitter color="#5D62B5" size={30} />
            <FaWhatsapp color="#5D62B5" size={30} />
            <FaInstagram color="#5D62B5" size={30} />
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
