import React from "react";
import { Link } from "react-router-dom";

function Produto3() {
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
              <h1>BATERIA</h1>
            </header>

            <span className="image main"><img src="images/produto3.jpg" alt="Produto" className="produto-img" /></span>
            <p>A bateria de um carro tem como principal função fornecer energia elétrica para o veículo. Ela desempenha um papel essencial no funcionamento do sistema elétrico e no arranque do motor.</p>
            <h2>R$ 210,90</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p4" className="image"><img src="images/produto4.png" alt="Produto 4" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p5" className="image"><img src="images/produto5.png" alt="Produto 5" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p6" className="image"><img src="images/produto6.png" alt="Produto 6" className="produto-relacionado" /></Link>
                 
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

export default Produto3;
