import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import BookItem from '../BookItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_BOOKS } from '../../utils/actions';
import { QUERY_BOOKS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function BookList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_BOOKS);

  useEffect(() => {
    if (data) {
      console.log(data)
      dispatch({
        type: UPDATE_BOOKS,
        books: data.books,
      });
      console.log(data)
      data.books.forEach((book) => {
        idbPromise('books', 'put', book);
      });
    } else if (!loading) {
      idbPromise('books', 'get').then((books) => {
        dispatch({
          type: UPDATE_BOOKS,
          books: books,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterBooks() {
    if (!currentCategory) {
      return state.books;
    }

    return state.books.filter(
      (book) => book.category._id === currentCategory.id
    );
  }

  return (
    <div className="my-2">
      <h2>{state.currentCategory.name}</h2>
      {state.books.length ? (
        <div className="flex-row">
          {filterBooks().map((book) => (
            <BookItem
              key={book._id}
              item={book}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any books yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default BookList;
