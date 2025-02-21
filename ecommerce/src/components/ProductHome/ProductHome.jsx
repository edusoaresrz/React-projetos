import { books } from "../../db/db";

import styles from "./ProductHome.module.css";

import { useCart } from "../../context/CartContext";

const ProductHome = () => {
  const { addToCart } = useCart();

  return (
    <div className={styles.container_products}>
      {books.map((book) => (
        <div key={book.title} className={styles.product}>
          <p className={styles.product_title}>{book.title}</p>
          <img src={book.image} alt={book.title} />
          <p className={styles.product_price}>
            {book.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button className="btn" onClick={() => addToCart(book)}>
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductHome;
