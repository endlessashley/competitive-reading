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
              Read History for {user.firstName} {user.lastName}
            </h2>
            {user.readBooks.map((readBook) => (
              <div key={readBook._id} className="my-2">
                <h3>
                  {new Date(parseInt(readBook.readDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {readBook.books.map(({ _id, image, name, points }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/books/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${points}</span>
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
