import React from "react";
import { Link } from "react-router-dom";

function Produto13() {
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
              <h1>FILTRO DE AR</h1>
            </header>

            <span className="image main"><img src="images/produto13.png" alt="Produto" className="produto-img" /></span>
            <p>Peça responsável por filtrar o ar que entra no motor, evitando a entrada de sujeira e partículas que podem danificar o funcionamento do componente.</p>
            <h2>R$ 58,90</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p14" className="image"><img src="images/produto14.png" alt="Produto 14" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p15" className="image"><img src="images/produto15.png" alt="Produto 15" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p16" className="image"><img src="images/produto16.png" alt="Produto 16" className="produto-relacionado" /></Link>
                 
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

export default Produto13;
