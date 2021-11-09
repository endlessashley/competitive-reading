import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function ReadBookHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Home</Link>

        {user ? (
          <>
            <h2>
              {user.firstName} {user.lastName}'s Completed Bookshelf
            </h2>
            {user.readBooks.map((readBook) => (
              <div key={readBook._id} className="my-2">
                <div className="flex-row">
                  {readBook.books.map(({ _id, name, points }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/books/${_id}`}>
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>{points}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default ReadBookHistory;
