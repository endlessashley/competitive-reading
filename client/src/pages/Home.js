import React from "react";
import BookList from "../components/BookList";
import CategoryMenu from "../components/CategoryMenu";
import Shelf from "../components/Shelf";
import ViewChallenges from "../components/ViewChallenges"

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <CategoryMenu />
        </div>
        <div className="col-sm-8">
          <BookList />
        </div>
        {/* <div className="col-sm-4">
          <Shelf />
        </div> */}
      </div>
      
      
    </div>
  );
};

export default Home;
