import stateBase from './state'

const ADD_TO_BASKET = "ADD_TO_BASKET"
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

let initialState = stateBase

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return state = { ...state, products: state.products.map(it => {
        return it.id === action.id ? {...it, quant: it.quant - action.qtyInput} : it
      }), basket: [...state.basket, action.basketObj]}
    case REMOVE_FROM_CART:
      return state = { ...state, products: state.products.map(it => {
        return it.id === action.id ? {...it, quant: it.quant + action.quant} : it
      }), basket: state.basket.filter(it => {
        return it.id !== action.id
      })}
    default: return state
  }
}

export const addToBasketAC = (id, qtyInput, basketObj) => {
  return {type: ADD_TO_BASKET, id, qtyInput, basketObj}
}

export const removeFromCartAC = (id, quant) => {
  return { type: REMOVE_FROM_CART, id, quant };
}

export default productReducer