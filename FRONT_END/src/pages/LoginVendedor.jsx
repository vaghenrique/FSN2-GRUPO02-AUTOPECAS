import React from "react";
import { Link } from "react-router-dom";
import Gestures from '../components/Gestures';
import '../pages/CadUser.css'

function LoginVendedor() {
    return (
        <div className="cad_container">
          <div id="wrapper">
            
              <div id="main">
                <div class="inner">
    
                    <header id="header">
                      <a class="logo"><strong>Cadastro | Login</strong></a>
                      <ul class="icons">
                        <li><Link to='/cad_vendedor' className="logo">Ainda não tem uma conta?</Link></li>
                      </ul>
                    </header>
    
                    <section>
                    <div class="cad_area">
                      <h2 id="h2_cad">Entre com os seus dados de vendedor</h2>
                      <div className="form">
                        <form>
                          <div class="cad_dados">
                          <label>Endereço de Email:</label>
                          <input type="email"></input>
                          </div>
                          <div class="cad_dados">
                          <label>Senha de acesso:</label>
                          <input type="password"></input ><br/>
                          </div>
                          <div id="teste">
                          <button type="submit" class="teste">Login</button>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default LoginVendedor;