import React from "react";

function ProductItem({ product, addToCart }) {
  return (
    <li>
      <span>{product.name} - ${product.price}</span>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </li>
  );
}

export default ProductItem;
