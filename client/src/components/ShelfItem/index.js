import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_SHELF, UPDATE_SHELF_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const ShelftItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromShelf = item => {
    dispatch({
      type: REMOVE_FROM_SHELF,
      _id: item._id
    });
    idbPromise('shelf', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_SHELF,
        _id: item._id
      });
      idbPromise('shelf', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_SHELF_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('shelf', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromShelf(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default ShelfItem;