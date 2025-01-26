import React from "react";
import { Link } from "react-router-dom";

function Produto23() {
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
                <Link to="/p24" className="image"><img src="images/produto2.jpg" alt="Produto 2" /></Link>
                <p>Breve descrição do produto relacionado.</p>
              </article>
              <article>
                <Link to="/p25" className="image"><img src="images/produto3.jpg" alt="Produto 3" /></Link>
                <p>Breve descrição do produto relacionado.</p>
              </article>
              <article>
                <Link to="/p26" className="image"><img src="images/produto4.jpg" alt="Produto 4" /></Link>
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
              <li><Link to="/parceiros">Parceiros</Link></li>
              <li><Link to="/devolucao">Devolução</Link></li>
              <li><Link to="/redesociais">Rede Sociais</Link></li>
              <li><Link to="/instrucoes">Instruções</Link></li>
              <li><Link to="/pagamento">Formas de Pagamento</Link></li>
              <li><Link to="/fale">Fale Comigo</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Produto23;
