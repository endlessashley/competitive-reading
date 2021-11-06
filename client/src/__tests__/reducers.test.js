import { reducer } from '../utils/reducers';
import {
  UPDATE_BOOKS,
  
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  
} from '../utils/actions';

const initialState = {
  books: [],
  shelf: [
    {
      _id: '1',
      name: 'Soup',
      // purchaseQuantity: 1
    },
    {
      _id: '2',
      name: 'Bread',
      // purchaseQuantity: 2
    }
  ],
  shelfOpen: false,
  categories: [{ name: 'Food' }],
  currentCategory: '1',
};

test('UPDATE_BOOKS', () => {
  let newState = reducer(initialState, {
    type: UPDATE_BOOKS,
    books: [{}, {}]
  });

  expect(newState.books.length).toBe(2);
  expect(initialState.books.length).toBe(0);
});



  

  



test('UPDATE_CATEGORIES', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}]
  });

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

test('UPDATE_CURRENT_CATEGORY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: '2'
  });

  expect(newState.currentCategory).toBe('2');
  expect(initialState.currentCategory).toBe('1');
});



