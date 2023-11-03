

import React from 'react';
import styled from 'styled-components';

const ProdContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 200px;
 margin: 20px;
 padding: 20px;
 border: 1px solid #ccc;
 border-radius: 5px;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 transition: box-shadow 0.3s ease-in-out;

 &:hover {
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.5);
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

export const ProductContainer = ({data}) => {
 return (
    <ProdContainer>
    
      <Image src={data.images[0]} alt={data.title} />
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      <Price>${data.price.toFixed(2)}</Price>
    </ProdContainer>
 );
};
