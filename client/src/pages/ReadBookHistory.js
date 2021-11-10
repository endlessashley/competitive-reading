import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

import {GiTrophy} from "react-icons/gi"

import NavIcons from "../components/NavIcons";

function ReadBookHistory() {
    const { data } = useQuery(QUERY_USER);
    let user;
    let totalPoints = 0;
  
    if (data) {
      user = data.user;
      console.log(user)
      totalPoints = user.readBooks.reduce((score) => score + readBook.points)
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
                  {readBook.books.map(({ _id, name, author, points }, index) => (
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
                  ))}
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
