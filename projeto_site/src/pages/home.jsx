import React from "react";
import { Link } from "react-router-dom";
import Gestures from '../components/Gestures';

function Home() {
  return (
    <div className="is-preload">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header id="header">
              <a className="logo"><strong>AutoPrime</strong></a>
              <ul className="icons">
                <li>
                {/*<a href="#" className="icon solid fa-shopping-cart">
                    /* <span className="label">Carrinho</span> 
                    
                  </a>*/}
                </li>
              </ul>
            </header>

            <section id="banner">
              <div className="content">
                <header>
                  <h1>AutoPrime</h1>
                </header>
                <p>Fundada em 2024, a AutoPrime surgiu com o objetivo de oferecer autopeças de qualidade, preços justos e entregas rápidas...</p>
                <ul className="actions">
                  <li><Gestures><Link to="/localizacao" className="button big">Clique aqui</Link></Gestures></li>
                </ul>
              </div>
              <span className="image object">
                <img src="images/farois.jpeg" alt="" />
              </span>
            </section>

            <section>
              <header className="major">
              </header>
              <div className="features">
                <article>
                  <span className="icon fa-gem"></span>
                  <div className="content">
                    <h3>Eficiência</h3>
                    <p>Combinamos tecnologia avançada e processos otimizados para oferecer uma experiência ágil e prática.</p>
                  </div>
                </article>
                <article>
                  <span className="icon solid fa-paper-plane"></span>
                  <div className="content">
                    <h3>Qualidade</h3>
                    <p>Na AutoPrime, qualidade não é apenas uma promessa, é um compromisso.</p>
                  </div>
                </article>
                <article>
                  <span className="icon solid fa-rocket"></span>
                  <div className="content">
                    <h3>Inovação</h3>
                    <p>Estamos sempre à frente no mercado de autopeças, trazendo soluções modernas para facilitar sua vida.</p>
                  </div>
                </article>
                <article>
                  <span className="icon solid fa-signal"></span>
                  <div className="content">
                    <h3>Atendimento</h3>
                    <p>Nosso time de especialistas está preparado para oferecer suporte técnico, tirar dúvidas e garantir que você tenha a melhor experiência de compra.</p>
                  </div>
                </article>
              </div>
            </section>

            <section>
              <header className="major">
                <h2>Veja também nossos produtos</h2>
              </header>
              <div className="posts">
                <article>
                  <Link to="/p20" className="image"><img src="images/amortecedor.jpeg" alt="" /></Link>
                  <h3>Amortecedor</h3>
                  <ul className="actions">
                    <li><Gestures><Link to="/p20" className="button">Clique Aqui</Link></Gestures></li>
                  </ul>
                </article>
                <article>
                  <Link to="/p1" className="image"><img src="images/bico_injetor.jpg" alt="" /></Link>
                  <h3>Bico Injetor</h3>
                  <ul className="actions">
                    <li><Gestures><Link to="/p1" className="button">Clique Aqui</Link></Gestures></li>
                  </ul>
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

export default Home;
