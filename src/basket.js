import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCartAC } from "./redux/productReducer";

const Basket = () => {
  const { products, basket } = useSelector((s) => s.productReducer);
  const dispatch = useDispatch();

  console.log(products);

  const isBasketEmpty =
    basket.length === 0
    ? (
      <div style={{ backgroundColor: "orange", height: "100%" }}>
        Basket is empty
      </div>
    )
    : (
      <div style={{ backgroundColor: "orange", height: "100%" }}>
        {basket.map((it) => {
          const removeItem = (e) => {
            e.preventDefault();
            dispatch(removeFromCartAC(it.id, it.quant));
          };
          return (
            <li key={it.id}>
              {it.name} - {it.quant} litro(s) - Cost: {it.price * it.quant} €.{" "}
              <button onClick={removeItem}>X</button>
            </li>
          );
        })}
        <div>
          Total: {basket.reduce((acc, rec) => acc + rec.quant * rec.price, 0)}{" "}
          €.
        </div>
        <div>
          <button>To order</button>
        </div>
      </div>
    );
  return isBasketEmpty;
};

export default Basket;
