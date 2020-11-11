import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./product";
import Cart from "./cart";
import mainStyle from "./styles/main.module.scss";

const { main } = mainStyle;

const Main = () => {
  const { products, tempCart } = useSelector(
    (s) => s.productReducer
  );
  const dispatch = useDispatch();
  console.log(tempCart)
  return (
    <main className={main}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <article style={{ width: "70%", height: "100%" }}>
          {products.map((it) => {
            return (
              <Product
                key={it.id}
                id={it.id}
                photo_url={it.photo_url}
                name={it.name}
                descript={it.descript}
                unit={it.unit}
                price={it.price}
                dispatch={dispatch}
              />
            );
          })}
        </article>
        <div style={{ width: "30%", height: "500px", paddingLeft: "20px" }}>
          Cesta de la compra
          <Cart />
        </div>
      </div>
    </main>
  );
};

export default Main;
