import React from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { useCart } from "../components/CartContext";
import { BsFillCartPlusFill } from "react-icons/bs";
import Gestures from '../components/Gestures';


function Catalogo() {
  const { addItemToCart } = useCart();
  //PARTE EM QUE ESTARÁ SENDO IMPLEMENTADO O ARRAY PARA RODAR A LISTAGEM DOS 30 PRODUTOS
  const produtos = [
    { id: 1, title: "Abraçadeira", price: "R$19,90", image: "images/produto1.png" },
    { id: 2, title: "Alternador", price: "R$899,90", image: "images/produto2.png" },
    { id: 3, title: "Bateria de Carro", price: "R$499,90", image: "images/produto3.png" },
    { id: 4, title: "Bico Injetor", price: "R$349,90", image: "images/produto4.png" },
    { id: 5, title: "Bomba Lavadora", price: "R$229,90", image: "images/produto5.png" },
    { id: 6, title: "Bucha Dianteira", price: "R$59,90", image: "images/produto6.png" },
    { id: 7, title: "Cilindro Auxiliar Embreagem", price: "R$199,90", image: "images/produto7.png" },
    { id: 8, title: "Cilindro Mestre Freio", price: "R$299,90", image: "images/produto8.png" },
    { id: 9, title: "Cintas de Airbag", price: "R$149,90", image: "images/produto9.png" },
    { id: 10, title: "Coxim Amortecedor", price: "R$89,90", image: "images/produto10.png" },
    { id: 11, title: "Coxim Motor", price: "R$129,90", image: "images/produto11.png" },
    { id: 12, title: "Estator Alternador", price: "R$189,90", image: "images/produto12.png" },
    { id: 13, title: "Filtro de Ar Automotivo", price: "R$39,90", image: "images/produto13.png" },
    { id: 14, title: "Hodômetro", price: "R$259,90", image: "images/produto14.png" },
    { id: 15, title: "Horímetro", price: "R$279,90", image: "images/produto15.png" },
    { id: 16, title: "Jogo Escova Alternador", price: "R$69,90", image: "images/produto16.png" },
    { id: 17, title: "Junta Homocinética", price: "R$349,90", image: "images/produto17.png" },
    { id: 18, title: "Kit Batente", price: "R$119,90", image: "images/produto18.png" },
    { id: 19, title: "Mancal Alternador", price: "R$159,90", image: "images/produto19.png" },
    { id: 20, title: "Par Cubo Roda", price: "R$399,90", image: "images/produto20.png" },
    { id: 21, title: "Par Limpador Para-brisa", price: "R$79,90", image: "images/produto21.png" },
    { id: 22, title: "Pivô de Suspensão", price: "R$139,90", image: "images/produto22.png" },
    { id: 23, title: "Pivô Limpador", price: "R$179,90", image: "images/produto23.png" },
    { id: 24, title: "Regulador Voltagem", price: "R$109,90", image: "images/produto24.png" },
    { id: 25, title: "Retentor Trambulador", price: "R$49,90", image: "images/produto25.png" },
    { id: 26, title: "Roto Alternador", price: "R$229,90", image: "images/produto26.png" },
    { id: 27, title: "Sapata Lona Freio", price: "R$269,90", image: "images/produto27.png" },
    { id: 28, title: "Sirene de Ré", price: "R$99,90", image: "images/produto28.png" },
    { id: 29, title: "Terminal Direção", price: "R$189,90", image: "images/produto29.png" },
    { id: 30, title: "Vela Ignição", price: "R$59,90", image: "images/produto30.png" },
  ];
  
  const handleAddToCart = (produto) => {
    addItemToCart(produto);
  };

  return (
    <div className="is-preload">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header id="header">

              <a className="logo"><strong>AutoPrime</strong></a>
              <ul className="icons">
                <li>
                  {/*Aqui é o botão*/}
                  <a href="#" className="icon solid fa-shopping-cart">
                    <span className="label">Carrinho</span>
                    <span className="cart-status">1</span>
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
                {produtos.map((produto, i) => (
                  <article key={produto.id}>
                    <img src={produto.image} alt={produto.title} />
                    <h3>{produto.title}</h3>
                    <h3>{produto.price}</h3>
                    <div className="space-buttons">
                    <button type="button" onClick={() => handleAddToCart(produto)}>
                    <BsFillCartPlusFill />
                    </button>
                    <ul className="actions">
                      <li><Link to={`/p${i + 1}`} className="button">Ver Detalhes</Link>
                      </li>
                    </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            {/*AQUI ESTÁ O CART*/}
            <Cart/>
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

