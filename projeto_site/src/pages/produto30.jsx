import React from "react";
import { Link } from "react-router-dom";

function Produto30() {
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
              <h1>VELA IGNIÇÃO</h1>
            </header>

            <span className="image main"><img src="images/produto30.png" alt="Produto" className="produto-img" /></span>
            <p>A Vela de Ignição. É quem fornece a centelha, também chamada de faísca elétrica, que é responsável por dar a partida no motor do seu veículo.
            </p>
            <h2>R$ 11,39</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p1" className="image"><img src="images/produto1.png" alt="Produto 1" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p2" className="image"><img src="images/produto2.png" alt="Produto 2" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p3" className="image"><img src="images/produto3.png" alt="Produto 3" className="produto-relacionado" /></Link>
                 
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

export default Produto30;
