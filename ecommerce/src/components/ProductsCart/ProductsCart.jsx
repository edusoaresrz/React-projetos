import styles from "./ProductsCart.module.css";

import { useCart } from "../../context/CartContext";

const ProductsCart = () => {
  const {
    cart,
    removeToCart,
    totalPriceCart,
    totalQuantityCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

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
              <div className={styles.product_cart} key={product.id}>
                <div className={styles.product_check_img}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.product_cart_description}>
                  <p>{product.title}</p>
                  <div className={styles.product_cart_controls}>
                    {product.quantity === 1 ? (
                      <button
                        onClick={() => removeToCart(product.id)}
                        className={styles.remove_btn}
                      >
                        Deletar
                      </button>
                    ) : (
                      <button onClick={() => decreaseQuantity(product.id)}>
                        -
                      </button>
                    )}
                    <p>{product.quantity}</p>
                    <button onClick={() => increaseQuantity(product.id)}>
                      +
                    </button>
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
        <p>Total de produtos: {totalQuantityCart()}</p>
        {cart.length === 0 ? (
          <p>Valor: 0</p>
        ) : (
          <div className={styles.total_price_cart}>
            <p>Valor:</p>
            <span>
              {totalPriceCart().toLocaleString("pt-BR", {
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
