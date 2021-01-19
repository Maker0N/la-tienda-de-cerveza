import stateBase from "./state";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CREATE_ORDER = "CREATE_ORDER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = stateBase;

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return (state = {
        ...state,
        // products: state.products.map((it) => {
        //   return it.id === action.id
        //     ? { ...it, quant: it.quant - action.qtyInput }
        //     : it;
        // }),
        tempCart:
          state.tempCart.length !== 0 &&
          state.tempCart.map((it) => (it = it.id)).includes(action.basketObj.id)
            ? state.tempCart.map((it) =>
                it.id === action.basketObj.id
                  ? { ...it, quant: action.qtyInput }
                  : it
              )
            : [...state.tempCart, action.basketObj],
      });

    case REMOVE_FROM_CART:
      return (state = {
        ...state,
        // products: state.products.map((it) => {
        //   return it.id === action.id
        //     ? { ...it, quant: it.quant + action.quant }
        //     : it;
        // }),
        tempCart: state.tempCart.filter((it) => {
          return it.id !== action.id;
        }),
      });

    case CREATE_ORDER:
      return (state = {
        ...state,
        products: state.products.map((it) => {
          for (let i = 0; i < state.tempCart.length; i += 1) {
          if (it.id === state.tempCart[i].id) {
            return { ...it, quant: it.quant - state.tempCart[i].quant }
        }}
        return {...it, quant: it.quant}
      }),
    order: [...state.order, ...state.tempCart],
    tempCart: []
  })

  case SET_CURRENT_PAGE:
    return (state = { ...state, currentPage: action.currentPage})

    default:
      return state;
  }
};

export const addToCartAC = (id, qtyInput, basketObj) => {
  return { type: ADD_TO_CART, id, qtyInput, basketObj };
};

export const removeFromCartAC = (id, quant) => {
  return { type: REMOVE_FROM_CART, id, quant };
};

export const createOrderAC = () => {
  return { type: CREATE_ORDER };
};

export const setCurrentPageAC = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
}

export default productReducer;

// Adding a new amount to the state

// case ADD_TO_CART:

//       return (state = {
//         ...state,
//         products: state.products.map((it) => {
//           return it.id === action.id
//             ? { ...it, quant: it.quant - action.qtyInput }
//             : it;
//         }),
//         tempCart:
//           state.tempCart.length !== 0 && state.tempCart.map(it => it = it.id).includes(action.basketObj.id)
//             ? state.tempCart.map((it) =>
//                 it.id === action.basketObj.id
//                   ? { ...it, quant: it.quant + action.qtyInput }
//                   : it
//             )
//             : [...state.tempCart, action.basketObj],
//       });
