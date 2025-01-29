import React from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { useCart } from "../components/CartContext";
import { BsFillCartPlusFill } from "react-icons/bs";

function Catalogo() {
  const { addItemToCart } = useCart();
  //PARTE EM QUE ESTARÁ SENDO IMPLEMENTADO O ARRAY PARA RODAR A LISTAGEM DOS 30 PRODUTOS
  const produtos = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Produto ${i + 1}`,
    price: `R$${(199 + i).toFixed(2)}`,
    image: `images/produto${i + 1}.jpg`,
  }));

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
                <li><Link to="/catalogo" className="button">More</Link></li>
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

