import React from "react";
import { Link } from "react-router-dom";

function Produto25() {
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
              <h1>RETENTOR TRAMULADOR</h1>
            </header>

            <span className="image main"><img src="images/produto25.png" alt="Produto" className="produto-img" /></span>
            <p>Os retentores têm a função principal de reter óleos, graxas e outros tipos de Fluídos, que devem ser contidos no interior de um veículo, evitando também a entrada de impurezas do meio externo como, por exemplo: terra, areia, poeira e etc.
            </p>
            <h2>R$ 44,56</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p26" className="image"><img src="images/produto26.png" alt="Produto 26" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p27" className="image"><img src="images/produto27.png" alt="Produto 27" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p28" className="image"><img src="images/produto28.png" alt="Produto 28" className="produto-relacionado" /></Link>
                 
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

export default Produto25;
