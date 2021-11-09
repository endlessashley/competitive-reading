import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_TO_SHELF, UPDATE_SHELF_QUANTITY } from "../../utils/actions";
// import { idbPromise } from "../../utils/helpers";
import {GiTrophy} from "react-icons/gi"
import { ADD_READBOOK } from "../../utils/mutations";

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

  // const { shelf } = state

  const addReadbook = () => {




    const itemInShelf = item.find((bookItem) => bookItem._id === _id)
    if (itemInShelf) {
      dispatch({
        type: ADD_READBOOK,
        _id: _id,
      });
      // idbPromise('shelf', 'put', {
      //   ...itemInShelf,
      //   purchaseQuantity: parseInt(itemInShelf.purchaseQuantity) + 1
      // });
    }
    //  else {
    //   dispatch({
    //     type: ADD_TO_SHELF,
    //     book: { ...item, purchaseQuantity: 1 }
    //   });
    //   idbPromise('shelf', 'put', { ...item, purchaseQuantity: 1 });
    // }
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
      <button onClick={addReadbook}>Add to Bookshelf</button>
    </div>
  );
}

export default BookItem;
