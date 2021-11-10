import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import {GiTrophy} from "react-icons/gi"
import { ADD_READBOOK } from "../../utils/mutations";

function BookItem({item}) {
  const [state, dispatch] = useStoreContext();

  const {
    name,
    _id,
    points,
    author,
  } = item;


  const addReadBook = () => {
      dispatch({
        type: ADD_READBOOK,
        _id: _id,
        name: name,
        author: author,
        points: points
      });
      
  }

  return (
    <div className="category-card">
      <Link to={`/books/${_id}`}>
        <p>{name}< br/> {author}</p>
        
      </Link>
      <div className="points">
        <span>{points} points</span>
        <i className="points-icon" ><GiTrophy /></i>
        
      </div>
      <button onClick={addReadBook}>Add to Bookshelf</button>
    </div>
  );
}

export default BookItem;
