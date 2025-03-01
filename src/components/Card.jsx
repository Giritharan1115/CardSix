import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const ProductCard = styled.div`
  background: ${(props) => props.$bgColor || "#fff"};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 300px;
  margin-top: 10px;
`;
const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: 10px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
`;
const SubTitle = styled.p`
  margin-top: 5px;
  color: #777;
  font-size: 0.9rem;
`;
const Description = styled.p`
  margin: 0;
  color: #777;
  font-size: 0.9rem;
`;
const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 5px 0;
`;

const BuyButton = styled.button`
  background: #222;
  height: 35px;
  width: 100px;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #444;
  }
`;
const HeartIcon = styled(FaHeart)`
  color: #ac1754;
  font-size: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
`;
const SubContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 10px;
  margin-top: 5px;
`;

const Card = ({ product }) => {
  return (
    <ProductCard $bgColor={product.bgColor}>
      <HeartIcon />
      <Image src={product.image} alt={product.name} />
      <Content>
        <Title>{product.name}</Title>
        <SubTitle>by {product.brand}</SubTitle>
        <Description>{product.description}</Description>
        <SubContent>
          <Price>${product.price.toFixed(2)}</Price>
          <BuyButton>Buy</BuyButton>
        </SubContent>
      </Content>
    </ProductCard>
  );
};

export default Card;
