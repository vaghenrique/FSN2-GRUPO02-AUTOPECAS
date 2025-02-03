import React from "react";
import { Link } from "react-router-dom";

function Produto18() {
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
              <h1>JUNTA SUSPENÇÃO</h1>
            </header>

            <span className="image main"><img src="images/produto18.png" alt="Produto" className="produto-img" /></span>
            <p>Este é um dispositivo que as pessoas adicionam ao seu sistema de suspensão. Ele serve como uma almofada adicional ou amortecedor. Isso ajudará a evitar que as diferentes partes metálicas da suspensão entrem em contato umas com as outras.</p>
            <h2>R$ 32,20</h2>
            <button className="button primary">Comprar</button>

            <hr className="major" />
            <h2>Produtos Relacionados</h2>
            <div className="mini-posts">
              <article>
                <Link to="/p19" className="image"><img src="images/produto19.png" alt="Produto 19" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p20" className="image"><img src="images/produto20.png" alt="Produto 20" className="produto-relacionado" /></Link>
                 
              </article>
              <article>
                <Link to="/p21" className="image"><img src="images/produto21.png" alt="Produto 21" className="produto-relacionado" /></Link>
                 
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

export default Produto18;
