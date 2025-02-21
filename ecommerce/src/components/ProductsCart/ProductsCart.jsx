import styles from "./ProductsCart.module.css";

const ProductsCart = () => {
  const products = [
    {
      title: "O Senhor dos Anéis: A Sociedade do Anel",
      price: 59.9,
      image: "https://m.media-amazon.com/images/I/81hCVEC0ExL._SL1500_.jpg",
    },
    {
      title: "1984",
      price: 39.9,
      image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
    },
  ];

  return (
    <div className={styles.container_cart}>
      <div className={styles.container_product_cart}>
        <div className={styles.cart_description}>
          <h1>Carrinho de compras</h1>
          <p>Preço</p>
        </div>
        {products ? (
          products.map((product) => (
            <>
              <div className={styles.product_cart}>
                <div className={styles.product_check_img}>
                  <input
                    type="checkbox"
                    name="check-product"
                    id="check-product"
                  />
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
          <p>Carrinho vazio</p>
        )}
      </div>
      <div className={styles.total_product_cart}>
        <p>Total de produtos: 1</p>
        <p>Valor: R$xx,xx</p>
        <button className="btn">Finalizar pedido</button>
      </div>
    </div>
  );
};

export default ProductsCart;
