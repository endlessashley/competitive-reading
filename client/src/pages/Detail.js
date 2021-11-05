import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Shelf from '../components/Shelf';
import { useStoreContext } from '../utils/GlobalState';
import {
<<<<<<< Updated upstream
  REMOVE_FROM_SHELF,
  UPDATE_SHELF_QUANTITY,
  ADD_TO_SHELF,
=======
  UPDATE_SHELF_QUANTITY,
>>>>>>> Stashed changes
  UPDATE_PRODUCTS,
  ADD_TO_SHELF,
  REMOVE_FROM_SHELF,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, shelf } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToShelf = () => {
    const itemInShelf = shelf.find((shelfItem) => shelfItem._id === id);
    if (itemInShelf) {
      dispatch({
        type: UPDATE_SHELF_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInShelf.purchaseQuantity) + 1,
      });
      idbPromise('shelf', 'put', {
        ...itemInShelf,
        purchaseQuantity: parseInt(itemInShelf.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_SHELF,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('shelf', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromShelf = () => {
    dispatch({
      type: REMOVE_FROM_SHELF,
      _id: currentProduct._id,
    });

    idbPromise('shelf', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && shelf ? (
        <div className="container my-1">
          <Link to="/">← Back to Products</Link>

          <h2>{currentProduct.name}</h2>

          <p>{currentProduct.description}</p>

          <p>
            <strong>Points:</strong>${currentProduct.points}{' '}
            <button onClick={addToShelf}>Add to Shelf</button>
            <button
              disabled={!shelf.find((p) => p._id === currentProduct._id)}
              onClick={removeFromShelf}
            >
              Remove from Shelf
            </button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Shelf />
    </>
  );
}

export default Detail;
