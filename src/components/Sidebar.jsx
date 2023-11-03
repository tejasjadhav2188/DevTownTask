
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { StyledSidebar } from "./styled_components/Sidebar.styled"


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 20vw;
  padding-top: 14vh;
`;

export const SidebarLayout = ({ data, handleSort, handleFilter }) => {


  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((data)=>{
        setCategories(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>

      <StyledSidebar>
        <p> Filters</p>

        <div>
          <label>
            Sort by Price:
            <select onChange={(e) => handleSort(e.target.value)}>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </label>
        </div>
        <br /><br /><br />
        <div>
          <label>
            Category:
            <select onChange={(e) => {
              handleFilter(e.target.value)
            }}>
              <option value="all">All</option>
              {
                categories.map((category,index)=>(

                    <option value={category} key={index}>{category}</option>
                  ))
            
              }
              <option value="laptops">Laptops</option>
              <option value="home-decoration">Decoration</option>
              <option value="skincare">Skincare</option>
              <option value="groceries">Groceries</option>

            </select>
          </label>
        </div>



      </StyledSidebar>
    </>
  )
}


