import React, { useState } from 'react'
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


const ProductCart = (props) => {

  let [stateInput, setStateInput] = useState(props.quant);

  const handleChangePlus = (e) => {
    e.target.value = stateInput;
    setStateInput((stateInput = +e.target.value + 1));
  };

  const handleChangeMinus = (e) => {
    e.target.value = stateInput;
    setStateInput(stateInput === 0 ? stateInput : +e.target.value - 1);
  };

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
          <button
            type="button"
            // onClick={handleSubmit}
          >
            Сambio
          </button>
        </div>
      </div>
      <div className={price}>{props.price * stateInput} €</div>
    </section>
  );
}

export default ProductCart