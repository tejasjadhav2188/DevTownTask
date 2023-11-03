// src/components/Pagination.js
import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  font-size: 16px;
  color: ${({ active }) => (active ? 'blue' : 'black')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PageButton
          key={number}
          onClick={() => onPageChange(number)}
          active={number === currentPage}
        >
          {number}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
