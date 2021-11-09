import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_TO_BOOKSHELF } from '../../utils/mutations';

const BookshelfButton = ({ userId }) => {
  const [book, setBook] = useState('');

  const [addToBookshelf, { error }] = useMutation(ADD_TO_BOOKSHELF);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addToBookshelf({
        variables: { userId, book },
      });

      setBook('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Endorse some more skills below.</h4>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Endorse some skills..."
            value={book}
            className="form-input w-100"
            onChange={(event) => setBook(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Endorse Skill
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};


export default BookshelfButton;