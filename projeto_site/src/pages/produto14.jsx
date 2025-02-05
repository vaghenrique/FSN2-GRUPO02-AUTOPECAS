import React from "react";
import { Link } from "react-router-dom";

function Produto14() {
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
              <h1>HODOMETRO</h1>
            </header>

            <span className="image main"><img src="images/produto14.png" alt="Produto" className="produto-img" /></span>
            <p>Esse componente está no painel para registar quantos quilômetros o carro percorreu no total. O equipamento é usado como referência para medir distâncias.
            </p>
            <h2>R$ 148,23</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p15" className="image"><img src="images/produto15.png" alt="Produto 15" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p16" className="image"><img src="images/produto16.png" alt="Produto 16" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p17" className="image"><img src="images/produto17.png" alt="Produto 17" className="produto-relacionado" /></Link>
                 
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

export default Produto14;
