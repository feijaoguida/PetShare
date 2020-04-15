import React from "react";
import { FaShippingFast } from "react-icons/fa";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import imageLogo from "../../assets/pet-clinic.png";
import imageServico from "../../assets/Icon.jpg";
import imagedog_love_24x from "../../assets/dog_love_24x.png";
import imageGroup5 from "../../assets/Group-5.svg";
import imagecardbadge from "../../assets/card-badge.svg";

import "./styles.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header></Header>
      <div className="home-body">
        <div className="infos">
          <div className="cards-info">
            <div className="cards-icon">
              <img src={imagedog_love_24x} alt="" />
            </div>
            <div className="cards-texto">
              <p className="titulo-paragrafo">Clinicas 24/7</p>
              <p>
                <span className="descricao-paragrafo">
                  Encontre clinicas veterinárias perto de você, para atender o
                  meu melhor amigo a qualquer dia e qualquer horario.
                </span>
              </p>
            </div>
          </div>
          <div className="cards-info">
            <div className="cards-icon">
              <img src={imageGroup5} alt="" />
            </div>
            <div className="cards-texto">
              <p className="titulo-paragrafo">Compre de pessoas reais</p>
              <p>
                <span className="descricao-paragrafo">
                  Aqui na PetShare você lida diretamente com o proprietário dos
                  petShops, e somos a ponte de ligação entre você e o
                  veterinário.
                </span>
              </p>
            </div>
          </div>
          <div className="cards-info">
            <div className="cards-icon">
              <img src={imagecardbadge} alt="" />
            </div>
            <div className="cards-texto">
              <p className="titulo-paragrafo">Plataforma segura e confiável</p>
              <p>
                <span className="descricao-paragrafo">
                  Aqui na PetShare, garantimos sua satisfação e os melhores
                  descontos com as clinícas.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="conteudo-home-banner">
            <p>PetShare</p>
            <p>Mais que um pet, Família</p>
            <button>Conheça...</button>
          </div>
        </div>
        <div className="destaque">
          <div className="titulo-destaque">
            <p>Conheça nossos parceiros</p>
          </div>
          <div className="cards">
            <div className="cards-destaque">
              <div className="fotos-cards">
                <img src={imageLogo} alt="Card 1" />
              </div>
              <div className="texto-cards">
                <p className="titulo-paragrafo">
                  <strong>PetHappy</strong>{" "}
                </p>
                <p>
                  <span>Seu pet Feliz</span>
                </p>
                <span className="descricao-paragrafo">
                  <p>Fone: 62 3505 5555</p>
                  <p>Trindade-GO</p>
                </span>
              </div>
              <button>Saiba mais...</button>
            </div>
            <div className="cards-destaque">
              <div className="fotos-cards">
                <img src={imageLogo} alt="Card 1" />
              </div>
              <div className="texto-cards">
                <p className="titulo-paragrafo">
                  <strong>PetHappy</strong>{" "}
                </p>
                <p>
                  <span className="descricao-paragrafo">Seu pet Feliz</span>
                </p>
                <span className="descricao-paragrafo">
                  <p>Fone: 62 3505 5555</p>
                  <p>Trindade-GO</p>
                </span>
              </div>
              <button>Saiba mais...</button>
            </div>
            <div className="cards-destaque">
              <div className="fotos-cards">
                <img src={imageLogo} alt="Card 1" />
              </div>
              <div className="texto-cards">
                <p className="titulo-paragrafo">
                  <strong>PetHappy</strong>{" "}
                </p>
                <p>
                  <span>Seu pet Feliz</span>
                </p>
                <p>Fone: 62 3505 5555</p>
                <p>Trindade-GO</p>
              </div>
              <button>Saiba mais...</button>
            </div>
            <div className="cards-destaque">
              <div className="fotos-cards">
                <img src={imageLogo} alt="Card 1" />
              </div>
              <div className="texto-cards">
                <p className="titulo-paragrafo">
                  <strong>PetHappy</strong>{" "}
                </p>
                <p>
                  <span>Seu pet Feliz</span>
                </p>
                <p>Fone: 62 3505 5555</p>
                <p>Trindade-GO</p>
              </div>

              <button>Saiba mais...</button>
            </div>
          </div>
        </div>
        <div className="color">
          <div className="destaque">
            <div className="cards">
              <div className="titulo-destaque coluna-servicos">
                <p>Conheça nossos Serviços</p>
                <span className="descricao-paragrafo">
                  Conheça todos os serviços prestados pelos parceiros clicando
                  no link abaixo e fique a vontade para entrar em contato
                </span>
                <button>Serviços</button>
              </div>
              <div className="cards-grid">
                <div className="cards-destaque grid">
                  <div className="fotos-cards">
                    <img src={imageServico} alt="Card 1" />
                  </div>
                  <div className="texto-cards">
                    <p className="titulo-paragrafo">
                      <strong>Clinicas</strong>{" "}
                    </p>
                    <p>
                      <span>Encontre os melhores veterinários na região.</span>
                    </p>
                  </div>
                  <button>Saiba mais...</button>
                </div>
                <div className="cards-destaque grid">
                  <div className="fotos-cards">
                    <img src={imageServico} alt="Card 1" />
                  </div>
                  <div className="texto-cards">
                    <p className="titulo-paragrafo">
                      <strong>Hotel</strong>{" "}
                    </p>
                    <p>
                      <span>
                        Vai viajar e não tem com quem deixar o seu pet, encontre
                        os melhores hoteis para pets da região.
                      </span>
                    </p>
                  </div>
                  <button>Saiba mais...</button>
                </div>
                <div className="cards-destaque grid">
                  <div className="fotos-cards">
                    <img src={imageServico} alt="Card 1" />
                  </div>
                  <div className="texto-cards">
                    <p className="titulo-paragrafo">
                      <strong>Hospital</strong>{" "}
                    </p>
                    <p>
                      <span>
                        Clinicas veterinários para atender com dedicação
                      </span>
                    </p>
                  </div>
                  <button>Saiba mais...</button>
                </div>
                <div className="cards-destaque grid">
                  <div className="fotos-cards">
                    <img src={imageServico} alt="Card 1" />
                  </div>
                  <div className="texto-cards">
                    <p className="titulo-paragrafo">
                      <strong>Banho</strong>{" "}
                    </p>
                    <p>
                      <span>Serviço de banho no seu pet amigo</span>
                    </p>
                  </div>
                  <button>Saiba mais...</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="destaque"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
