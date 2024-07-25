import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);


  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
