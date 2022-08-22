import React from "react";
import Product from "./Product";
import "./Products.css";
import { useState } from "react";

const ProductList = ({ products, addToCart, models }) => {
  const [choosenModel, setChoosenModel] = useState(models[0]);

  const displayedProducts = models.filter(
    (model) => model.category === choosenModel.name
  );
  console.log(displayedProducts);

  return (
    <div className="productList-container">
      {products.map((product) => (
        <Product product={product} addToCart={addToCart} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
