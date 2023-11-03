// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProductContainer } from './ProductContainer';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 20vw;
  padding-top: 14vh;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState(''); // Filter by category
  const [sortOrder, setSortOrder] = useState('asc'); // Sorting order


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

 

  const handleFilter = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleSort = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setFilteredProducts(sortedProducts);
};

  return (

    <Container>
      {products.map((product, index) => (
        <ProductContainer data={product} key={index}/>
          
      ))}
    </Container>
  );
};

export default ProductList;
