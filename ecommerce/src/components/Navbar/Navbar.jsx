import styles from "./Navbar.module.css";
import logoPesquisa from "../../assets/lupa-pesquisa20x20.png";

import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const { cart, totalQuantityCart } = useCart();

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h1>Livraria Hoje</h1>
      </Link>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder="Buscar por livros" />
        <button type="submit">
          <img src={logoPesquisa} alt="lupa pesquisa" />
        </button>
      </form>
      <div className={styles.container_login}>
        <p>Login</p>
        <p>Cadastrar</p>
      </div>
      <div className={styles.cart}>
        <Link to="/cart">Carrinho</Link>
        {cart.length > 0 && (
          <div>
            <span>{totalQuantityCart()}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
