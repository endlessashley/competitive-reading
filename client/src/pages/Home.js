import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Shelf from "../components/Shelf";
<<<<<<< Updated upstream
=======
import ViewChallenges from "../components/ViewChallenges"
>>>>>>> Stashed changes

const Home = () => {
  return (
    <div className="container">
<<<<<<< Updated upstream
      <CategoryMenu />
      <ProductList />
      <Shelf />
=======
      <div className="row">
        <div className="col-sm-4">
          <CategoryMenu />
        </div>
        <div className="col-sm-4">
          <ProductList />
        </div>
        <div classname="col-sm-4">
          <Shelf />
        </div>
      </div>
      
      
>>>>>>> Stashed changes
    </div>
  );
};

export default Home;
