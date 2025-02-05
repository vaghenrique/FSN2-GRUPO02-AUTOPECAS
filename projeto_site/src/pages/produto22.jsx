import React from "react";
import { Link } from "react-router-dom";

function Produto22() {
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
              <h1>PIVÔ DE SUSPENSÃO</h1>
            </header>

            <span className="image main"><img src="images/produto22.png" alt="Produto" className="produto-img" /></span>
            <p>O pivô de suspensão, também conhecido como junta esférica, é um componente responsável por conectar a suspensão ao braço de controle do veículo, permitindo que a suspensão se mova suavemente em várias direções.</p>
            <h2>R$ 199,90</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p23" className="image"><img src="images/produto23.png" alt="Produto 23" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p24" className="image"><img src="images/produto24.png" alt="Produto 24" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p25" className="image"><img src="images/produto25.png" alt="Produto 25" className="produto-relacionado" /></Link>
                 
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

export default Produto22;
