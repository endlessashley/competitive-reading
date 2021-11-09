import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import ShelfItem from '../ShelfItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_SHELF, ADD_MULTIPLE_TO_SHELF } from '../../utils/actions';
// import './style.css';
import {GiBookshelf, GiTrophy, GiCardRandom, GiStrong} from "react-icons/gi"
import ReactTooltip from 'react-tooltip';


// stripePromise returns a promise with the stripe object as soon as the Stripe package loads
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Shelf = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // We check to see if there is a data object that exists, if so this means that a checkout session was returned from the backend
  // Then we should redirect to the checkout with a reference to our session id
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // If the shelf's length or if the dispatch function is updated, check to see if the shelf is empty.
  // If so, invoke the getShelf method and populate the shelf with the existing from the session
  useEffect(() => {
    async function getShelf() {
      const shelf = await idbPromise('shelf', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_SHELF, books: [...shelf] });
    }

    if (!state.shelf.length) {
      getShelf();
    }
  }, [state.shelf.length, dispatch]);

  function toggleShelf() {
    dispatch({ type: TOGGLE_SHELF });
  }

  function calculateTotal() {
    let sum = 0;
    state.shelf.forEach((item) => {
      sum += item.points * item.purchaseQuantity;
    });
    return sum;
  }

  // When the submit checkout method is invoked, loop through each item in the shelf
  // Add each item id to the bookIds array and then invoke the getCheckout query passing an object containing the id for all our books
  function submitCheckout() {
    const bookIds = [];

    state.shelf.forEach((item) => {
      // for (let i = 0; i < item.purchaseQuantity; i++) {
        bookIds.push(item._id);
      // }
      
    });

    getCheckout({
      variables: { books: bookIds },
    });
    console.log(bookIds)
  }

      if (!state.shelfOpen) {
        return (
          <div className="nav-key">
          <div className="view-bookshelf" onClick={toggleShelf}>
            <i className="nav-icons" alt="bookshelf" data-tip="View Your Bookshelf"><GiBookshelf /></i>
            <ReactTooltip />
          </div>
          <div className="view-leaderboard">
             {/* onClick={toggleShelf}> */}
            <i className="nav-icons" alt="trophy" data-tip="View Leaderboard"><GiTrophy /></i>
            <ReactTooltip />
          </div>
          <div className="choose-challenge">
        <i className="nav-icons" alt="challenge" data-tip="Choose a Challenge"><GiStrong /></i>
      </div>
          <div className="view-random">
             {/* onClick={toggleShelf}> */}
            <i className="nav-icons" alt="random" data-tip="Get Random Book Recommendation"><GiCardRandom /></i>
            <ReactTooltip />
          </div>
          </div>
        );
      }



  return (
    <div className="shelf">
      <div className="close" onClick={toggleShelf}>
        [close]
      </div>
      <h2>My Bookshelf</h2>
      {state.shelf.length ? (
        <div>
          {state.shelf.map((item) => (
            <ShelfItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total ReaderScore™: {calculateTotal()}</strong>

            {/* Check to see if the user is logged in. If so render a button to check out */}
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Add to Score</button>
            ) : (
              <span>(Log in to mark as read.)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your bookshelf yet!
        </h3>
      )}
    </div>
  );
};

export default Shelf;
