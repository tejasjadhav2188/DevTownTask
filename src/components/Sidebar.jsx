
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { StyledSidebar } from "./styled_components/Sidebar.styled"
import { ProductContainer } from './ProductContainer';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 20vw;
  padding-top: 14vh;
`;

export const SidebarLayout = () => {

    const [products, setProducts] = useState([]);
    


    return(
        <>

        <StyledSidebar>
        <div>
        <label>
          Filter by Category:
          <select onChange={(e) => handleFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="smartphones">smartphones</option>
            <option value="laptops">Laptops</option>
            {/* Add more categories */}
          </select>
        </label>
      </div>

      <div>
        <label>
          Sort by Price:
          <select onChange={() => handleSort()}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </label>
      </div>

      <Container>
      {products.map((product, index) => (
        <ProductContainer data={product} key={index}/>
          
      ))}
    </Container>
        </StyledSidebar>
        </>
    )
}


