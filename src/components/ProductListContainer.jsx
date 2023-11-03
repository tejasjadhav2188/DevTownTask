// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProductContainer } from './ProductContainer';
import { SidebarLayout } from './Sidebar';
import Pagination from './Pagination';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin:0vw 12vw;
  padding-top: 14vh;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12); 
  
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=0')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;


  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Handle changing the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


 

  const handleFilter = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
      
    console.log(filterCategory)
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
      
    }
  };

  const handleSort = (sortOrder) => {

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }

    });
    setFilteredProducts(sortedProducts);
};

  return (
    <>
    
    <SidebarLayout data={products} handleSort={handleSort} handleFilter={handleFilter} />

    <Container>
      {currentProducts.map((product, index) => (
        <ProductContainer data={product} key={index}/>
        
        ))}
    </Container>
    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
        </>
  );
};

export default ProductList;
