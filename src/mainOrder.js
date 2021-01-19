import React from 'react'
import { useSelector } from 'react-redux'
import mainStyle from "./styles/main.module.scss";

const { main } = mainStyle

const MainOrder = () => {
  const { products, tempCart, order } = useSelector(s => s.productReducer)
  console.log(products, tempCart, order);
  return (
    <div className={main}>
      Order # 1
      <ul>
        {order.map((it) => {
          const width = { display: "inline-block", width: "150px" };
          return (
            <li key={it.id}>
              <span style={width}>{it.name} </span>
              <span style={width}>{it.quant} litro(s) </span>
              <span style={width}>{it.quant * it.price} Euro</span>
              <span></span>
              <span></span>
            </li>
          );
        })}
      </ul>
      <div>
        Total: {order.reduce((acc, rec) => acc + rec.quant * rec.price, 0)}{" "}
        €.
      </div>
    </div>
  );
}

export default MainOrder