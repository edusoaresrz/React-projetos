import styles from "./Navbar.module.css";
import logoPesquisa from "../../assets/lupa-pesquisa20x20.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
      <div>
        <Link to="/cart">Carrinho</Link>
      </div>
    </nav>
  );
};

export default Navbar;
