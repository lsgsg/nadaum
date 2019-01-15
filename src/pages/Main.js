import React from "react";
// import Header from "../components/structure/Header";
import MainStructure from "../components/structure/MainStructure"
// import InsertForm from "../components/products/InsertForm/InsertForm"
// import ProductWrapper from '../components/products/ProductList';
import ProductContainer from '../containers/ProductContainer'
const Main = () => {
  return (
      <MainStructure>
          <ProductContainer/>
      </MainStructure>
  )
};
export default Main;
