import React from "react";

function Cart() {

  return (
    <div>
      <h2>Cart Products</h2>

      {/* {products.map((product) => {
        return (
          <div key={product.id} className="cartCard">
            <img src={product.image} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={()=>handleRemove(product.id)} className="btn">Remove</button>
          </div>
        );
      })} */}
    </div>
  );
}

export default Cart;
