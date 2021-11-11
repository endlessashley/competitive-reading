import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

import {GiTrophy} from "react-icons/gi"

import NavIcons from "../components/NavIcons";

function ReadBookHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
    console.log(user)
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
            {/* <h2>
              {user.readBooks[0]._id}
            </h2> */}
            {user.readBooks.map((readBook) => (
              <div key={readBook._id} className="my-2">
                <div className="flex-row">
                  <div>
                    <h2>{readBook._id}</h2>
                  </div>
                  <div>
                    
                    <h2>{readBook.readDate}</h2>
                  </div>
                  
                  {/* {readBook.books.map(({ _id, name, author, points }, index) => (
                    <div key={index} className="category-card">
                      <Link to={`/books/${_id}`}>
                        <p>{name}
                        < br/>
                        {author}</p>
                      </Link>
                      <div className="points"> 
                        <span>{points} points</span>
                        <i className="points-icon"><GiTrophy/></i>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            ))}
          </>
        ) : null}
        <NavIcons/>
      </div>
    </>
  );
}

export default ReadBookHistory;
