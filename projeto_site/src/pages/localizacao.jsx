import React from "react";
import { Link } from "react-router-dom";

function Localizacao() {
  return (
    <div>
      <div id="wrapper">

          <div id="main">
            <div class="inner">

                <header id="header">
                  <a class="logo"><strong>Localização</strong></a>
                  <ul class="icons">
                    <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
                    <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                    <li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li>
                  </ul>
                </header>

                <section>
                  <header class="main">
                    <h1>Onde estamos localizados?</h1>
                  </header>

                  
                  <p>A AutoPrime está estrategicamente localizada na Praça Dom Máximo, 384, em Xique-Xique, Bahia, para atender você com conveniência e rapidez.  Nosso espaço é de fácil acesso, ideal para quem busca autopeças de qualidade com um atendimento próximo e personalizado. Venha nos visitar e confira tudo o que temos a oferecer!</p>
                  
                  
                  <hr class="major" />

                  <h2>Exportamos para outros países?</h2>
              
                  <p>Sim! A AutoPrime vai além das fronteiras, oferecendo suas autopeças de qualidade para diversos países. Com um sistema logístico eficiente e parceiros internacionais, garantimos que nossos produtos cheguem a clientes de outros mercados com a mesma excelência e confiabilidade que entregamos no Brasil. Seja para grandes distribuidores ou clientes individuais, nossa atuação global reforça o compromisso de levar o melhor da AutoPrime a qualquer lugar do mundo.






                  </p>

                  <hr class="major" />

                  <h2>Acesso e Conectividade</h2>
                  
                  <p>A localização da AutoPrime em Praça Dom Máximo, 384, Xique-Xique, BA não só oferece comodidade aos nossos clientes locais, mas também facilita a conexão com diversas regiões do Brasil. Estamos próximos de importantes vias de transporte, garantindo que nossos produtos cheguem rapidamente aos clientes através de nossa eficiente rede logística. Além disso, com a possibilidade de compras online, nossos serviços estão sempre ao alcance, independentemente de onde você esteja.
                </p>

                  <hr class="major" />

                  
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

export default Localizacao;
