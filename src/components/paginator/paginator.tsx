import './styles.css';

import React from 'react';

interface IPaginatorProps {
  totalItems: number;
  itemsPerPage: number;
  pageNumber: number;
  changePage: (page: number) => void;
}

export default function IPaginator(props: IPaginatorProps) {
  const pageNumbers = [];
  const pageQuantity = Math.ceil(props.totalItems / props.itemsPerPage);

  let inferiorLimit: number;
  let superiorLimit: number;

  if (props.pageNumber <= 5) {
    inferiorLimit = 1;
    superiorLimit = pageQuantity > 10 ? 10 : pageQuantity;
  } else {
    const thereAreMorePages = pageQuantity > props.pageNumber + 5;

    superiorLimit = thereAreMorePages ? props.pageNumber + 5 : pageQuantity;

    inferiorLimit = pageQuantity > 10 ? superiorLimit - 9 : 1;
  }

  for(let i = inferiorLimit; i <= superiorLimit; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="paginator-container">
      {
        pageNumbers.map((item, index) => {
          if (item === props.pageNumber) {
            return (
              <li 
                className="paginator-item-active" 
                key={index}
              >
                {item}
              </li>
            );
          }
          return (
            <li 
              className="paginator-item" 
              key={index}
              onClick={() => props.changePage(item)}
            >
              {item}
            </li>
          );
        })
      }
    </ul>
  );
}