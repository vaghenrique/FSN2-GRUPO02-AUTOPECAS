import React from "react";
import { Link } from "react-router-dom";

function Produto28() {
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
              <h1>SIRENE DE RÉ</h1>
            </header>

            <span className="image main"><img src="images/produto28.png" alt="Produto" className="produto-img" /></span>
            <p>A Sirene de Ré foi desenvolvida para alertar as pessoas no caminho de um veículo que está se movimentando para trás, evitando possíveis acidentes.
            </p>
            <h2>R$ 22,28</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p29" className="image"><img src="images/produto29.png" alt="Produto 29" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p30" className="image"><img src="images/produto30.png" alt="Produto 30" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p1" className="image"><img src="images/produto1.png" alt="Produto 1" className="produto-relacionado" /></Link>
                 
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

export default Produto28;
