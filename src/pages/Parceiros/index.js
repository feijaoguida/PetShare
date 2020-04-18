import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import quemSomos from "../../assets/bgparceiro.jpg";

import HeaderParceiro from "../../Components/HeaderParceiro";
import Footer from "../../Components/Footer";

export default function Parceiros() {
  return (
    <>
      <HeaderParceiro />
      <div className="container-parceiro">
        <div className="body-parceiro">
          <div className="quem-somos">
            <div className="titulo-quem-somos">
              <p>Quem Somos</p>
              <hr className="hr-separador" />
            </div>
            <div className="conteudo-quem-somos">
              <div className="imagem-quem-somos">
                <img src={quemSomos} alt="" />
              </div>
              <div className="texto-quem-somos">
                <em>
                  A Cliníca Veterinaria PetFeliz é Mussum Ipsum, cacilds vidis
                  litro abertis. Atirei o pau no gatis, per gatis num morreus.
                  Quem manda na minha terra sou euzis! Leite de capivaris, leite
                  de mula manquis sem cabeça. Praesent vel viverra nisi. Mauris
                  aliquet nunc non turpis scelerisque, eget.
                </em>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
