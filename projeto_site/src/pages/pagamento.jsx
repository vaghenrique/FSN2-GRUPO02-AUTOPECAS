import React from "react";
import { Link } from "react-router-dom";

function Pagamento() {
  return (
    <div>
      <div id="wrapper">

          <div id="main">
            <div class="inner">

                <header id="header">
                  <a class="logo"><strong>Formas de Pagamento</strong></a>
                  <ul class="icons">
                    <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
                    <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                    <li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li>
                  </ul>
                </header>

                <section>

                  <span class="image main"><img src="images/pic11.jpg" alt="" /></span>

                  <p>Prezado cliente, na compra de qualquer um de nossos produtos, você tem o direito de escolher entre as diferentes formas de pagamento contidas nessa página.</p>
                  
                  <hr class="major" />

                  <h2>Cartões</h2>
                  <p>Você porde optar por pagar em cartão de crédito (podendo parcelar e garantir flexibilidade financeira).</p>
                  <p>Cartão de débito (Uma alternativa favorável para pagamentos à vista)</p>
                  <p>Ou pagamento com carteiras digitais.</p>
                  <hr class="major" />

                  <h2>Pix</h2>
                  <p>É uma opção prática e viável para ofertas.</p>

                  <hr class="major" />

                  <h2>Pagamento por assinatura</h2>
                  <p>Com esta opção, você poderá comprar um pacote de produtos ou um de reposição de peças apenas com uma assinatura mensal</p>
                </section>

            </div>
          </div>

          <div id="sidebar">
            <div class="inner">
                <nav id="menu">
                  <header class="major">
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

                <section>
                  <header class="major">
                    <h2>Produtos</h2>
                  </header>
                  <div class="mini-posts">
                    <article>
                      <a href="produto2.html" class="image"><img src="images/pic07.jpg" alt="" /></a>
                      <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                    </article>
                    <article>
                      <a href="produto10.html" class="image"><img src="images/pic08.jpg" alt="" /></a>
                      <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                    </article>
                    <article>
                      <a href="produto19.html" class="image"><img src="images/pic09.jpg" alt="" /></a>
                      <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                    </article>
                  </div>
                  <ul class="actions">
                    <li><a href="catalogo.html" class="button">More</a></li>
                  </ul>
                </section>

                <section>
                  <header class="major">
                    <h2>Get in touch</h2>
                  </header>
                  <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  <ul class="contact">
                    <li class="icon solid fa-envelope"><a href="mailto:emailalgum@gmail.com">emailalgum@gmail.com</a></li>
                    <li class="icon solid fa-phone">(012) 345-6789</li>
                    <li class="icon solid fa-home">1234 Rua lugar algum N°5678<br />
                    Fortaleza, CEP 09876-5432</li>
                  </ul>
                </section>

                <footer id="footer">
                  <p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                </footer>

            </div>
          </div>

        </div>
    </div>
  );
}

export default Pagamento;
