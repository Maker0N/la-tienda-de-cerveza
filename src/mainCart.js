import React from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { createOrderAC } from "./redux/productReducer";
import ProductCart from "./productCart";
import mainCartStyle from "./styles/main.module.scss";

const { main } = mainCartStyle;

const MainCart = () => {
  const { tempCart } = useSelector((s) => s.productReducer);
  const dispatch = useDispatch();

  const createOrderClick = () => {
    dispatch(createOrderAC(tempCart));
  };

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
          <button
            type="button"
            style={{ width: "60%", height: "20%", backgroundColor: "orange" }}
            onClick={createOrderClick}
          >
            <Link
              to="/order"
              style={{ textDecoration: "none", cursor: "default" }}
            >
              Confirmar y pagar
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCart;
