import React from "react";
import Product from "./Product";

const Products = (props) => {
  const { products } = props;
  const produtcsCard = products.map((product, id) => (
    <Product key={id} product={product} />
  ));

  return <section className="products">{produtcsCard}</section>;
};

export default Products;
