import React from "react";
import { Link } from "react-router-dom";

function Produto7() {
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
              <h1>CILINDRO AUXILIAR</h1>
            </header>

            <span className="image main"><img src="images/produto7.png" alt="Produto" className="produto-img" /></span>
            <p>O cilindro auxiliar da embreagem é uma união de cilindro secundário e rolamento da embreagem. Ele contém um Pistão ligado ao rolamento. Quando o pedal da embreagem é acionado, o Pistão se move para a frente, e o rolamento da embreagem é deslocado axialmente contra a mola de diafragma, interrompendo o atrito entre disco da embreagem e volante do motor. Quando o pedal da embreagem é solto, a mola de diafragma coloca o Pistão na sua Posição inicial, restaurando o contato de atrito.
            </p>
            <h2>R$ 125,30</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p8" className="image"><img src="images/produto8.png" alt="Produto 8" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p9" className="image"><img src="images/produto9.png" alt="Produto 9" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p10" className="image"><img src="images/produto10.png" alt="Produto 10" className="produto-relacionado" /></Link>
                 
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

export default Produto7;
