import React from "react";
import Card from "./components/Card";
import styled from "styled-components";
import download from "./assets/download.jpg";

const products = [
  {
    name: "Nike Air Pegasus",
    brand: "Nike",
    description: "The product by Nike.",
    price: 180,
    image: download,
    bgColor: "#FDB7EA",
  },
  {
    name: "Nike ZoomX",
    brand: "Nike",
    description: "The product by Nike.",
    price: 320,
    image: download,
    bgColor: "#A1E3F9",
  },
];

const AppDiv = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const App = () => {
  return (
    <AppDiv>
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </AppDiv>
  );
};

export default App;
