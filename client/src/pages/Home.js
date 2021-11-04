import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Shelf from "../components/Shelf";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Shelf />
    </div>
  );
};

export default Home;
