import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_SHELF, UPDATE_SHELF_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import {GiTrophy} from "react-icons/gi"

function BookItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    // image,
    name,
    _id,
    points,
    author,
    // quantity
  } = item;

  const { shelf } = state

  const addToShelf = () => {
    const itemInShelf = shelf.find((shelfItem) => shelfItem._id === _id)
    if (itemInShelf) {
      dispatch({
        type: UPDATE_SHELF_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInShelf.purchaseQuantity) + 1
      });
      idbPromise('shelf', 'put', {
        ...itemInShelf,
        purchaseQuantity: parseInt(itemInShelf.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_SHELF,
        book: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('shelf', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="category-card">
      <Link to={`/books/${_id}`}>
        {/* <img
          alt={name}
          src={`/images/${image}`}
        /> */}
        <p>{name}< br/> {author}</p>
        
      </Link>
      <div className="points">
        {/* <div>{quantity} {pluralize("item", quantity)} in stock</div> */}
        <span>{points} points</span>
        <i className="points-icon" ><GiTrophy /></i>
        
      </div>
      <button onClick={addToShelf}>Add to Shelf</button>
    </div>
  );
}

export default BookItem;
