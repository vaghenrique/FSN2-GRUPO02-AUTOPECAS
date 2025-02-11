import React from "react";
import { Link } from "react-router-dom";

function Produto26() {
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
              <h1>ROTOR ALTERNADOR</h1>
            </header>

            <span className="image main"><img src="images/produto26.png" alt="Produto" className="produto-img" /></span>
            <p>A função do rotor alternador seg automotive é formar um campo magnético para produzir a corrente elétrica, e a quantidade dos fios da bobina aumenta de acordo com a capacidade do alternador de gerar energia.
            </p>
            <h2>R$ 462,56</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p27" className="image"><img src="images/produto27.png" alt="Produto 27" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p28" className="image"><img src="images/produto28.png" alt="Produto 28" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p29" className="image"><img src="images/produto29.png" alt="Produto 29" className="produto-relacionado" /></Link>
                 
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

export default Produto26;
