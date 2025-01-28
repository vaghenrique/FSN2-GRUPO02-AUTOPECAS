import React from "react";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

const Gestures = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      {children}
    </motion.div>
  );
};

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
                  <header class="major">
                    <h2>Contato</h2>
                  </header>
                  <ul class="contact">
                    <li class="icon solid fa-envelope"><a href="mailto:emailalgum@gmail.com">emailalgum@gmail.com</a></li>
                    <li class="icon solid fa-phone">(012) 345-6789</li>
                    <li class="icon solid fa-home">1234 Rua lugar algum N°5678<br />
                    Fortaleza, CEP 09876-5432</li>
                  </ul>
                </section>

                <footer id="footer">
                  <p class="copyright">&copy; AutoPrime. Todos os direitos reservados.</p>
                </footer>

            </div>
          </div>

        </div>
    </div>
  );
}

export default Pagamento;
