import React, { useState } from "react";
import { addToCartAC } from "./redux/productReducer";
import productStyle from "./styles/product.module.scss";

const {
  section,
  photo,
  name,
  descript,
  buttons,
  input,
  price,
  plusMinus,
} = productStyle;

const Product = (props) => {
  let [stateInput, setStateInput] = useState(0);

  const handleChangePlus = (e) => {
    e.target.value = stateInput;
    setStateInput((stateInput = +e.target.value + 1))
  };

  const handleChangeMinus = (e) => {
    e.target.value = stateInput;
    setStateInput((stateInput === 0 ? stateInput : +e.target.value - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cartObj = {
      id: props.id,
      photo_url: props.photo_url,
      name: props.name,
      descript: props.descript,
      quant: +stateInput,
      unit: props.unit,
      price: props.price,
    };
    if (stateInput !== 0) {
    props.dispatch(addToCartAC(props.id, stateInput, cartObj));
    // setStateInput(stateInput = 0)
  }};

  return (
    <section className={section}>
      <div className={photo}>{props.photo_url}</div>
      <div className={name}>
        <div>{props.name}</div>
        <div className={descript}>{props.descript}</div>
      </div>
      <div className={buttons}>
        <button className={plusMinus} type="button" onClick={handleChangeMinus}>
          -
        </button>
        <input
          className={input}
          type="text"
          size="1"
          value={stateInput}
        ></input>
        <button className={plusMinus} type="button" onClick={handleChangePlus}>
          +
        </button>
        <div>litro(s)</div>
        <div>
          <button type="button" onClick={handleSubmit}>
            Añadir a la cesta
          </button>
        </div>
      </div>
      <div className={price}>{props.price} €/litro</div>
    </section>
  );
  }

export default Product;
