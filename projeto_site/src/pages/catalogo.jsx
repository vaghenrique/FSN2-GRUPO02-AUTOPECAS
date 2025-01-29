import React from "react";
import { Link } from "react-router-dom";
import Gestures from '../components/Gestures';

function Catalogo() {
  return (
    <div className="is-preload">
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

            <section id="banner">
              <div className="content">
                <header>
                  <h2>Catálogo de Produtos</h2>
                </header>
              </div>
            </section>

            <section>
              <div className="posts">
                <article>
                  <Link to="/p1" className="image">
                    <img src="images/produto1.jpg" alt="Produto 1" />
                  </Link>
                  <h3>Produto 1</h3>
                  <ul className="actions">
                    <li><Link to="/p1" className="button">Ver Detalhes</Link></li>
                  </ul>
                </article>
                <article>
                  <Link to="/p2" className="image">
                    <img src="images/produto2.jpg" alt="Produto 2" />
                  </Link>
                  <h3>Produto 2</h3>
                  <ul className="actions">
                    <li><Link to="/p2" className="button">Ver Detalhes</Link></li>
                  </ul>
                </article>
                {Array.from({ length: 25 }, (_, i) => (
                  <article key={i + 6}>
                    <Link to={`/p${i + 6}`} className="image">
                      <img src={`images/produto${i + 6}.jpg`} alt={`Produto ${i + 6}`} />
                    </Link>
                    <h3>Produto {i + 6}</h3>
                    <ul className="actions">
                      <li><Link to={`/p${i + 6}`} className="button">Ver Detalhes</Link></li>
                    </ul>
                  </article>
                ))}
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
                <li><Gestures><Link to="/">Tela Inicial</Link></Gestures></li>
                <li><Gestures><Link to="/catalogo">Catálogo</Link></Gestures></li>
                <li><Gestures><Link to="/localizacao">Localização</Link></Gestures></li>
                
                
                
                
                <li><Gestures><Link to="/pagamento">Formas de Pagamento</Link></Gestures></li>
                
              </ul>
            </nav>

            <section>
              <header className="major">
                <h2>Produtos</h2>
              </header>
              <div className="mini-posts">
                <article>
                  <Link to="/p2" className="image"><img src="images/pic01-4.png" alt="" /></Link>
                </article>
                <article>
                  <Link to="/p10" className="image"><img src="images/pic01-Recuperado1.png" alt="" /></Link>
                </article>
                <article>
                  <Link to="/p19" className="image"><img src="images/radiador.jpeg" alt="" /></Link>
                </article>
              </div>
              <ul className="actions">
                <li><Gestures><Link to="/catalogo" className="button">More</Link></Gestures></li>
              </ul>
            </section>

            <section>
              <header className="major">
                <h2>Contato</h2>
              </header>
              <ul className="contact">
                <li className="icon solid fa-envelope"><a href="mailto:emailalgum@gmail.com">emailalgum@gmail.com</a></li>
                <li className="icon solid fa-phone">(012) 345-6789</li>
                <li className="icon solid fa-home">1234 Rua lugar algum N°5678<br /> Fortaleza, CEP 09876-5432</li>
              </ul>
            </section>

            <footer id="footer">
              <p className="copyright">&copy; AutoPrime. Todos os direitos reservados.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogo;
