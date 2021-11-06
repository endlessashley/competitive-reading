import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_READBOOK } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
  const [addReadBook] = useMutation(ADD_READBOOK);

  useEffect(() => {
    async function saveReadBook() {
      const shelf = await idbPromise('shelf', 'get');
      const books = shelf.map((item) => item._id);

      if (books.length) {
        const { data } = await addReadBook({ variables: { books } });
        const bookData = data.addReadBook.books;

        bookData.forEach((item) => {
          idbPromise('shelf', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveReadBook();
  }, [addReadBook]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
