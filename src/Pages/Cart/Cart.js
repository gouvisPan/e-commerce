import React from "react";
import "./Cart.css";
import ProductListItem from "./ProductListItem";

const Cart = (props) => {
  const myCart = props.cart;
  console.log(myCart);

  return (
    <div className="cart-container">
      <div className="left-cart">
        <h2>Your Cart</h2>
        {myCart.line_items.map((product) => (
          <ProductListItem
            key={product.id}
            name={product.product_name}
            img={product.image.url}
            quantity={product.quantity}
            price={product.price.formatted}
            total={product.line_total.formatted}
          />
        ))}
      </div>
      <div className="right-cart"></div>
    </div>
  );
};

export default Cart;