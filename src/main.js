import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPageAC } from "./redux/productReducer";
import Product from "./product";
import Cart from "./cart";
import mainStyle from "./styles/main.module.scss";

const { main, currentPageStyle } = mainStyle;

const Main = () => {
  const { products, tempCart, pageSize, currentPage } = useSelector(
    (s) => s.productReducer
  );
  const dispatch = useDispatch();

  const pagesCount = Math.ceil(products.length / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages = [...pages, i];
  }

  console.log(currentPage);
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
          {products.slice((pageSize * currentPage - pageSize), (pageSize * currentPage)).map((it) => {
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
      <div>
        {pages.map((p) => {
          const clickCurrentPage = (e) => {
            e.preventDefault();
            dispatch(setCurrentPageAC(p));
          };
          return (
            <span
              key={p}
              className={currentPage === p ? currentPageStyle : null}
              onClick={clickCurrentPage}
            > {p} </span>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
