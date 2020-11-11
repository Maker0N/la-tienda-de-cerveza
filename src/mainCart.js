import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCart from "./productCart";
import mainCartStyle from "./styles/main.module.scss";

const { main } = mainCartStyle;

const MainCart = () => {
  const { tempCart } = useSelector((s) => s.productReducer);
  const dispatch = useDispatch();
  console.log(tempCart);

  return (
    <div className={main}>
      <div>
        Total: {tempCart.reduce((acc, rec) => acc + rec.quant * rec.price, 0)}{" "}
        €.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <article style={{ width: "70%", height: "100%" }}>
          {tempCart.map((it) => {
            return (
              <ProductCart
                key={it.id}
                id={it.id}
                photo_url={it.photo_url}
                name={it.name}
                quant={it.quant}
                descript={it.descript}
                unit={it.unit}
                price={it.price}
                dispatch={dispatch}
              />
            );
          })}
        </article>
        <div style={{ width: "30%", height: "500px", paddingLeft: "20px" }}>
          <button type="button" style={{ width: "60%", height: "20%", backgroundColor: "orange" }}>
            Confirmar y pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCart;
