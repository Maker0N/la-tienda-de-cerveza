import stateBase from './state'

const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

let initialState = stateBase

const productReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_CART:

      return (state = {
        ...state,
        products: state.products.map((it) => {
          return it.id === action.id
            ? { ...it, quant: it.quant - action.qtyInput }
            : it;
        }),
        tempCart:
          state.tempCart.length !== 0 && state.tempCart.map(it => it = it.id).includes(action.basketObj.id)
            ? state.tempCart.map((it) =>
                it.id === action.basketObj.id
                  ? { ...it, quant: it.quant + action.qtyInput }
                  : it
            )
            : [...state.tempCart, action.basketObj],
      });

    case REMOVE_FROM_CART:
      return state = { ...state, products: state.products.map(it => {
        return it.id === action.id ? {...it, quant: it.quant + action.quant} : it
      }), tempCart: state.tempCart.filter(it => {
        return it.id !== action.id
      })}

    default: return state
  }
}

export const addToCartAC = (id, qtyInput, basketObj) => {
  return {type: ADD_TO_CART, id, qtyInput, basketObj}
}

export const removeFromCartAC = (id, quant) => {
  return { type: REMOVE_FROM_CART, id, quant };
}

export default productReducer