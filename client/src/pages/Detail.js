import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Shelf from '../components/Shelf';
import { useStoreContext } from '../utils/GlobalState';
import {
  UPDATE_SHELF_QUANTITY,
  UPDATE_BOOKS,
  ADD_TO_SHELF,
  REMOVE_FROM_SHELF,
} from '../utils/actions';
import { QUERY_BOOKS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentBook, setCurrentBook] = useState({});

  const { loading, data } = useQuery(QUERY_BOOKS);

  const { books, shelf } = state;

  useEffect(() => {
    // already in global store
    if (books.length) {
      setCurrentBook(books.find((book) => book._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_BOOKS,
        books: data.books,
      });

      data.books.forEach((book) => {
        idbPromise('books', 'put', book);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('books', 'get').then((indexedBooks) => {
        dispatch({
          type: UPDATE_BOOKS,
          books: indexedBooks,
        });
      });
    }
  }, [books, data, loading, dispatch, id]);

  const addToShelf = () => {
    const itemInShelf = shelf.find((shelfItem) => shelfItem._id === id);
    if (itemInShelf) {
      dispatch({
        type: UPDATE_SHELF_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInShelf.purchaseQuantity) + 1,
      });
      idbPromise('shelf', 'put', {
        ...itemInShelf,
        purchaseQuantity: parseInt(itemInShelf.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_SHELF,
        book: { ...currentBook, purchaseQuantity: 1 },
      });
      idbPromise('shelf', 'put', { ...currentBook, purchaseQuantity: 1 });
    }
  };

  const removeFromShelf = () => {
    dispatch({
      type: REMOVE_FROM_SHELF,
      _id: currentBook._id,
    });

    idbPromise('shelf', 'delete', { ...currentBook });
  };

  return (
    <>
      {currentBook && shelf ? (
        <div className="container my-1">
          <Link to="/">← Back to Home</Link>

          <h2>{currentBook.name}</h2>

          <p>{currentBook.description}</p>

          <p>
            <strong>Points:</strong>${currentBook.points}{' '}
            <button onClick={addToShelf}>Add to Shelf</button>
            <button
              disabled={!shelf.find((p) => p._id === currentBook._id)}
              onClick={removeFromShelf}
            >
              Remove from Shelf
            </button>
          </p>

          <img
            src={`/images/${currentBook.image}`}
            alt={currentBook.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Shelf />
    </>
  );
}

export default Detail;
