import React from "react";
import { Link } from "react-router-dom";

function Produto14() {
  return (
<<<<<<< HEAD
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

            <span className="image main"><img src="images/produto1.jpg" alt="Produto" /></span>
            <p>Descrição detalhada do produto. Explicação sobre os benefícios, características e diferenciais.</p>
            <h2>R$ 199,90</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p15" className="image"><img src="images/produto2.jpg" alt="Produto 2" /></Link>
                <p>Breve descrição do produto relacionado.</p>
              </article>
              <article>
                <Link to="/p16" className="image"><img src="images/produto3.jpg" alt="Produto 3" /></Link>
                <p>Breve descrição do produto relacionado.</p>
              </article>
              <article>
                <Link to="/p17" className="image"><img src="images/produto4.jpg" alt="Produto 4" /></Link>
                <p>Breve descrição do produto relacionado.</p>
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
=======
    <div>
      <h1>Bem-vindo ao meu site</h1>
      <p>Esta é a página inicial.</p>
>>>>>>> a19ee82dabcdfdc9cae8f4b61fd9dea2a20bf64e
    </div>
  );
}

export default Produto14;
