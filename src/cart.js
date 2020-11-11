import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { removeFromCartAC } from "./redux/productReducer";

const Cart = () => {
  const { products, tempCart } = useSelector((s) => s.productReducer);
  const dispatch = useDispatch();

  console.log(products, tempCart);

  const isCartEmpty =
    tempCart.length === 0 ? (
      <div style={{ backgroundColor: "orange", height: "100%" }}>
        No tienes ningún artículo en la cesta.
      </div>
    ) : (
      <div style={{ backgroundColor: "orange", height: "100%" }}>
        {tempCart.map((it) => {
          const removeItem = (e) => {
            e.preventDefault();
            dispatch(removeFromCartAC(it.id, it.quant));
          };
          return (
            <li key={it.id}>
              {it.name} - {it.quant} litro(s) - Cost: {it.price * it.quant} €.{" "}
              <button
                style={{ border: "none", backgroundColor: "orange" }}
                onClick={removeItem}
              >
                X
              </button>
            </li>
          );
        })}
        <div>
          Total: {tempCart.reduce((acc, rec) => acc + rec.quant * rec.price, 0)} €.
        </div>
        <div>
          <button>
            <Link to="/cart">Ir en la cesta</Link>
          </button>
        </div>
      </div>
    );
  return isCartEmpty;
};

export default Cart;
