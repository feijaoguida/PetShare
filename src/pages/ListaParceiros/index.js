import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import Parceiro from "../../assets/Icon.jpg";

import Header from "../../Components/HeaderPages";
import Footer from "../../Components/Footer";

export default function ListaParceiros() {
  return (
    <>
      <Header />
      <div className="body-container">
        <div className="listagem-container">
          <div className="margin-35 titulo-paragrafo">
            <p>Listagem de Petshops Próximos</p>
          </div>
          <div className="blocos">
            <div className="imagens-blocos">
              <img src={Parceiro} alt="" />
            </div>
            <div className="corpo-blocos">
              <div className="texto-blocos">
                <p className="titulo-paragrafo">Clinica Veterinaria PetFeliz</p>
                <p className="descricao-paragrafo">
                  A Cliníca Veterinaria PetFeliz é Mussum Ipsum, cacilds vidis
                  litro abertis. Atirei o pau no gatis, per gatis num morreus.
                  Quem manda na minha terra sou euzis! Leite de capivaris, leite
                  de mula manquis sem cabeça. Praesent vel viverra nisi. Mauris
                  aliquet nunc non turpis scelerisque, eget.
                </p>
                <p className="descricao-paragrafo">
                  <strong>Telefone: </strong> 62 35056658
                </p>
                <p className="descricao-paragrafo">
                  <strong>Whatsapp: </strong> 62 35056658
                </p>
              </div>
              <div className="links-blocos">
                <Link to="/Parceiros">Veja Mais...</Link>
              </div>
            </div>
          </div>

          <div className="blocos">
            <div className="imagens-blocos">
              <img src={Parceiro} alt="" />
            </div>
            <div className="corpo-blocos">
              <div className="texto-blocos">
                <p className="titulo-paragrafo">Clinica Veterinaria PetFeliz</p>
                <p className="descricao-paragrafo">
                  A Cliníca Veterinaria PetFeliz é Mussum Ipsum, cacilds vidis
                  litro abertis. Atirei o pau no gatis, per gatis num morreus.
                  Quem manda na minha terra sou euzis! Leite de capivaris, leite
                  de mula manquis sem cabeça. Praesent vel viverra nisi. Mauris
                  aliquet nunc non turpis scelerisque, eget.
                </p>
                <p className="descricao-paragrafo">
                  <strong>Telefone: </strong> 62 35056658
                </p>
                <p className="descricao-paragrafo">
                  <strong>Whatsapp: </strong> 62 35056658
                </p>
              </div>
              <div className="links-blocos">
                <Link to="/Parceiros">Veja Mais...</Link>
              </div>
            </div>
          </div>

          <div className="blocos">
            <div className="imagens-blocos">
              <img src={Parceiro} alt="" />
            </div>
            <div className="corpo-blocos">
              <div className="texto-blocos">
                <p className="titulo-paragrafo">Clinica Veterinaria PetFeliz</p>
                <p className="descricao-paragrafo">
                  A Cliníca Veterinaria PetFeliz é Mussum Ipsum, cacilds vidis
                  litro abertis. Atirei o pau no gatis, per gatis num morreus.
                  Quem manda na minha terra sou euzis! Leite de capivaris, leite
                  de mula manquis sem cabeça. Praesent vel viverra nisi. Mauris
                  aliquet nunc non turpis scelerisque, eget.
                </p>
                <p className="descricao-paragrafo">
                  <strong>Telefone: </strong> 62 35056658
                </p>
                <p className="descricao-paragrafo">
                  <strong>Whatsapp: </strong> 62 35056658
                </p>
              </div>
              <div className="links-blocos">
                <Link to="/Parceiros">Veja Mais...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
