import styles from "./ProductsCart.module.css";
import lixeira from "../../assets/lixeira10x10.png";

import { useCart } from "../../context/CartContext";

const ProductsCart = () => {
  const { cart, totalCart } = useCart();

  return (
    <div className={styles.container_cart}>
      <div className={styles.container_product_cart}>
        <div className={styles.cart_description}>
          <h1>Carrinho de compras</h1>
          <p>Preço</p>
        </div>
        {cart.length > 0 ? (
          cart.map((product) => (
            <>
              <div className={styles.product_cart}>
                <div className={styles.product_check_img}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.product_cart_description}>
                  <p>{product.title}</p>
                  <div className={styles.product_cart_controls}>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                  </div>
                </div>
                <p className={styles.product_price}>
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </>
          ))
        ) : (
          <p className={styles.no_products_cart}>Carrinho vazio</p>
        )}
      </div>
      <div className={styles.total_product_cart}>
        <p>Total de produtos: {cart.length}</p>
        {cart.length === 0 ? (
          <p>Valor: 0</p>
        ) : (
          <div className={styles.total_price_cart}>
            <p>Valor:</p>
            <span>
              {totalCart().toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        )}

        <button className="btn">Finalizar pedido</button>
      </div>
    </div>
  );
};

export default ProductsCart;
