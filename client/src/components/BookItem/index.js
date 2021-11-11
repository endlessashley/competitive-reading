import React from "react";
import { useMutation } from '@apollo/client';
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

  const [addReadBook, { error }] = useMutation(ADD_READBOOK);


  const handleButtonClick = async () => {

    try {
      const data = await addReadBook({
        variables: { bookId: _id, name: name, points: points, author: author },
      
      })
      
      console.log(variables);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="category-card">
      <Link to={`/books/${_id}`}>
        <p>{name}< br/> {author}</p>
        
      </Link>
      <div className="points">
        <span>{points} points</span>
        <i className="points-icon" ><GiTrophy /></i>
        
      </div>
      <button onClick={handleButtonClick}>Add to Bookshelf</button>
    </div>
  );
}

export default BookItem;
