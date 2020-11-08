import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./product";
import Basket from "./basket";
import mainStyle from "./styles/main.module.scss";

const { main } = mainStyle;

const Main = () => {
  const { products, basket } = useSelector(
    (s) => s.productReducer
  );
  const dispatch = useDispatch();
  console.log(basket)
  return (
    <main className={main}>
      <div style={{ display: "flex", justifyContent: "space-around", padding: '20px' }}>
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
        <div style={{ width: "30%", height: "500px", paddingLeft: "20px" }}>Basket
         <Basket />
         </div>
      </div>
    </main>
  );
};

export default Main;
