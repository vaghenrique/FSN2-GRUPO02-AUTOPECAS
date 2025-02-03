import React from "react";
import { Link } from "react-router-dom";

function Produto8() {
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
              <h1>CILINDRO MESTRE</h1>
            </header>

            <span className="image main"><img src="images/produto8.png" alt="Produto" className="produto-img" /></span>
            <p>O cilindro mestre é um dispositivo de controle que converte a pressão não hidráulica (geralmente do pé do motorista) em pressão hidráulica. Este dispositivo controla os cilindros escravos localizados na outra extremidade do sistema hidráulico.
            </p>
            <h2>R$ 217,90</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p9" className="image"><img src="images/produto9.png" alt="Produto 9" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p10" className="image"><img src="images/produto10.png" alt="Produto 10" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p11" className="image"><img src="images/produto11.png" alt="Produto 11" className="produto-relacionado" /></Link>
                 
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

export default Produto8;
