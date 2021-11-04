import { useReducer } from "react";
import {
  UPDATE_PRODUCTS,
  ADD_TO_SHELF,
  UPDATE_SHELF_QUANTITY,
  REMOVE_FROM_SHELF,
  ADD_MULTIPLE_TO_SHELF,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_SHELF,
  TOGGLE_SHELF
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_SHELF:
      return {
        ...state,
        shelfOpen: true,
        shelf: [...state.shelf, action.product],
      };

    case ADD_MULTIPLE_TO_SHELF:
      return {
        ...state,
        shelf: [...state.shelf, ...action.products],
      };

    case UPDATE_SHELF_QUANTITY:
      return {
        ...state,
        shelfOpen: true,
        shelf: state.shelf.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };

    case REMOVE_FROM_SHELF:
      let newState = state.shelf.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        shelfOpen: newState.length > 0,
        shelf: newState
      };

    case CLEAR_SHELF:
      return {
        ...state,
        shelfOpen: false,
        shelf: []
      };

    case TOGGLE_SHELF:
      return {
        ...state,
        shelfOpen: !state.shelfOpen
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}