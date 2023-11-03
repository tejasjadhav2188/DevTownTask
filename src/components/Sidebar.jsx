
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100vw;
    height: 10vh;
    box-shadow: 2px 1px 1px #d2b9b9;
    position: fixed;
    z-index: 10;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;



h1{
    color : #0057e0;
    padding-left: 20px;

}

div{
  display: flex;
  align-items: center;
  padding: 0px 15px;
}

label{
  

}

`

export const SidebarLayout = ({  handleSort, handleFilter }) => {


  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>


      <StyledHeader>

        <h1>Dev Town</h1>
        <div>

          <div>
            <label>
              <p>Sort by Price:</p>
              <select onChange={(e) => handleSort(e.target.value)}>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <p>Category:</p>
              <select onChange={(e) => {
                handleFilter(e.target.value)
              }}>
                <option value="all">All</option>
                {
                  categories.map((category, index) => (

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
        </div>


      </StyledHeader>
    </>
  )
}


