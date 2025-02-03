import React from "react";
import { Link } from "react-router-dom";

function Produto21() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <header id="header">
          <a className="logo"><strong>AutoPrime</strong></a>
            <ul className="icons">
              <li>
                <a href="#" className="icon solid fa-shopping-cart">
                  <span className="label">Carrinho</span>
                  <span className="cart-status">1</span>
                </a>
              </li>          
            </ul>
          </header>

          <section>
            <header className="main">
              <h1>LIMPADOR DE PARA-BRISAS</h1>
            </header>

            <span className="image main"><img src="images/produto21.png" alt="Produto" className="produto-img" /></span>
            <p>limpador de vidros, é um componente essencial de um veículo automotor. Ele é projetado para limpar a água, a sujeira, a poeira e outros detritos do para-brisa, garantindo uma visão clara para o motorista.
            </p>
            <h2>R$ 26,97</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p22" className="image"><img src="images/produto22.png" alt="Produto 22" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p23" className="image"><img src="images/produto23.png" alt="Produto 23" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p24" className="image"><img src="images/produto24.png" alt="Produto 24" className="produto-relacionado" /></Link>
                 
              </article>
            </div>
          </section>
        </div>
      </div>

      <div id="sidebar">
        <div className="inner">
          <nav id="menu">
            <header className="major">
              <h2>Menu</h2>
            </header>
            <ul>
              <li><Link to="/">Tela Inicial</Link></li>
              <li><Link to="/catalogo">Catálogo</Link></li>
              <li><Link to="/localizacao">Localização</Link></li>
              
              
              
              
              <li><Link to="/pagamento">Formas de Pagamento</Link></li>
              
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Produto21;
