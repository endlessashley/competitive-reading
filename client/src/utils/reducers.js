import { useReducer } from "react";
import {
  UPDATE_BOOKS,
  ADD_TO_SHELF,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_MULTIPLE_TO_SHELF,
  UPDATE_SHELF_QUANTITY,
  // REMOVE_FROM_SHELF,
  CLEAR_SHELF,
  TOGGLE_SHELF,
  ADD_READBOOK,
  REMOVE_READBOOK
  
} from "./actions";

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_BOOKS:
      return {
        ...state,
        books: [...action.books],
      };

    case ADD_TO_SHELF:
      return {
        ...state,
        shelfOpen: true,
        shelf: [...state.shelf, action.book],
      };

    case ADD_MULTIPLE_TO_SHELF:
      return {
        ...state,
        shelf: [...state.shelf, ...action.books],
      };

    case UPDATE_SHELF_QUANTITY:
      return {
        ...state,
        shelfOpen: true,
        shelf: state.shelf.map(book => {
          if (action._id === book._id) {
            book.purchaseQuantity = action.purchaseQuantity
          }
          return book
        })
      };

    // case REMOVE_FROM_SHELF:
    //   let newState = state.shelf.filter(book => {
    //     return book._id !== action._id;
    //   });

      // return {
      //   ...state,
      //   shelfOpen: newState.length > 0,
      //   shelf: newState
      // };

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
      };

      case ADD_READBOOK:
        
        return {
          ...state,
          readBooks: [...state.readBooks, action.bookId, action.name, action.author, action.points]
        };
      
        case REMOVE_READBOOK:
          let newState = state.readBook.filter(readbooks => {
            console.log(state.readBook)
            return readbooks._id !== action._id;
        
          });
          return {
            ...state,
            readBook: newState
          };

    default:
      return state;
  }
};

export function useBookReducer(initialState) {
  return useReducer(reducer, initialState)
}