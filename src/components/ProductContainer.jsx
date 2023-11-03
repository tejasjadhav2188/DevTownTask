

import React from 'react';
import styled from 'styled-components';

const ProdContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 300px;
 margin: 20px;
 padding: 20px;
 border: 1px solid #ccc;
 border-radius: 5px;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 transition: box-shadow 0.3s ease-in-out;

 &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
 }
`;

const Image = styled.img`
 width: 100%;
 height: auto;
 margin-bottom: 20px;
`;

const Title = styled.h2`
 margin-bottom: 10px;
`;

const Description = styled.p`
 margin-bottom: 10px;
`;

const Price = styled.p`
 font-weight: bold;
`;

export const ProductContainer = (props) => {
 return (
    <ProdContainer>
    
      <Image src={props.data.images[0]} alt={props.data.title} />
      <Title>{props.data.title}</Title>
      <Description>{props.data.description}</Description>
      <Price>${props.data.price.toFixed(2)}</Price>
    </ProdContainer>
 );
};
