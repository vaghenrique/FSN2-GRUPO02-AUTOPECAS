import React from "react";
import { Link } from "react-router-dom";

function Produto19() {
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
              <h1>Produto Nome</h1>
            </header>

            <span className="image main"><img src="images/produto19.png" alt="Produto" className="produto-img" /></span>
            <p>Descrição detalhada do produto. Explicação sobre os benefícios, características e diferenciais.</p>
            <h2>R$ 199,90</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p20" className="image"><img src="images/produto20.png" alt="Produto 20" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p21" className="image"><img src="images/produto21.png" alt="Produto 21" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p22" className="image"><img src="images/produto22.png" alt="Produto 22" className="produto-relacionado" /></Link>
                 
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

export default Produto19;
