import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="is-preload">

        <div id="wrapper">

            <div id="main">
              <div className="inner">

                  <header id="header">
                    <a className="logo"><strong>Tela Inicial</strong></a>
                    <ul className="icons">
                      <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                      <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                      <li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                      <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                      <li><a href="#" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
                    </ul>
                  </header>

                  <section id="banner">
                    <div className="content">
                      <header>
                        <h1>AutoPrime</h1>
                      </header>
                      <p>Fundada em 2024, a AutoPrime
                        surgiu com o objetivo de oferecer
                        autopeças de qualidade, preços
                        justos e entregas rápidas,
                        atendendo às necessidades tanto
                        de motoristas quanto de oficinas
                        mecânicas. Desde o início, a
                        empresa apostou na tecnologia,
                        criando um sistema de pedidos
                        online e atendimento via aplicativo,
                        destacando-se pela inovação e
                        eficiencia.</p>
                      <ul className="actions">
                        <li><a href="localizacao.html" className="button big">Clique aqui</a></li>
                      </ul>
                    </div>
                    <span className="image object">
                      <img src="images/farois.jpeg" alt="" />
                    </span>
                  </section>

                  <section>
                    <header className="major">
                      <h2>Erat lacinia</h2>
                    </header>
                    <div className="features">
                      <article>
                        <span className="icon fa-gem"></span>
                        <div className="content">
                          <h3>Eficiencia</h3>
                          <p>Combinamos tecnologia avançada e processos otimizados para oferecer uma experiência ágil e prática.</p>
                        </div>
                      </article>
                      <article>
                        <span className="icon solid fa-paper-plane"></span>
                        <div className="content">
                          <h3>Qualidade</h3>
                          <p>Na AutoPrime, qualidade não é apenas uma promessa, é um compromisso. </p>
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
                          <p>Mais do que clientes, queremos parceiros. Nosso time de especialistas está preparado para oferecer suporte técnico, tirar dúvidas e garantir que você tenha a melhor experiência de compra.</p>
                        </div>
                      </article>
                    </div>
                  </section>

                  <section>
                    <header className="major">
                      <h2>Veja tambem nossos produtos</h2>
                    </header>
                    <div className="posts">
                      <article>
                        <a className="image"><img src="images/amortecedor.jpeg" alt="" /></a>
                        <h3>Amortecedorn</h3>
                        <ul className="actions">
                          <li><a href="produto20.html" className="button">Clique Aqui</a></li>
                        </ul>
                      </article>
                      <article>
                        <a className="image"><img src="images/bico_injetor.jpg" alt="" /></a>
                        <h3>Bico Injetor</h3>
                        <ul className="actions">
                          <li><a href="produto1.html" className="button">Clique Aqui</a></li>
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
                      <li><a href="index.html">Tela Inicial</a></li>
                      <li><a href="catalogo.html">Catalago</a></li>
                      <li><a href="localizacao.html">Localização</a></li>
                      <li><a href="parceiros.html">Parceiros</a></li>
                      <li><a href="devolucao.html">Devolução</a></li>
                      <li><a href="redesociais.html">Rede Sociais</a></li>
                      <li><a href="instrucoes.html">Instruções</a></li>
                      <li><a href="pagamento.html">Formas de Pagamento</a></li>
                      <li><a href="fale.html">Fale Comigo</a></li>
                    </ul>
                  </nav>

                  <section>
                    <header className="major">
                      <h2>Produtos</h2>
                    </header>
                    <div className="mini-posts">
                      <article>
                        <a href="produto2.html" className="image"><img src="images/pic01-4.png" alt="" /></a>
                      </article>
                      <article>
                        <a href="produto10.html" className="image"><img src="images/pic01-Recuperado1.png" alt="" /></a>
                      </article>
                      <article>
                        <a href="produto19.html" className="image"><img src="images/radiador.jpeg" alt="" /></a>
                      </article>
                    </div>
                    <ul className="actions">
                      <li><a href="catalogo.html" className="button">More</a></li>
                    </ul>
                  </section>

                  <section>
                    <header className="major">
                      <h2>Get in touch</h2>
                    </header>
                    <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                    <ul className="contact">
                      <li className="icon solid fa-envelope"><a href="mailto:emailalgum@gmail.com">emailalgum@gmail.com</a></li>
                      <li className="icon solid fa-phone">(012) 345-6789</li>
                      <li className="icon solid fa-home">1234 Rua lugar algum N°5678<br />
                      Fortaleza, CEP 09876-5432</li>
                    </ul>
                  </section>

                  <footer id="footer">
                    <p className="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                  </footer>

              </div>
            </div>

        </div>

    </div>
  );
}

export default App;
