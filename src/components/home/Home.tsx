import './styles.css';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import fetchProducts from '../../redux/MercadoLibreAPI/products/fetch-products';
import AppBar from '../app-bar/AppBar';
import ProductList from '../products-list/products-list';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);

  const dispatch = useDispatch();

  function onSubmit(text: string) {
    setPageNumber(1);
    setSearchText(text);

    dispatch(fetchProducts(text, itemsPerPage));
  }

  function changePage(page: number) {
    setPageNumber(page);

    const offset = (page - 1) * itemsPerPage;
    dispatch(fetchProducts(searchText, itemsPerPage, offset));
  }

  return (
    <div>
      <AppBar searchInputText={searchText} setSearchInputText={setSearchText} onSubmit={onSubmit} />
      <div className="main-content">
        <ProductList pageNumber={pageNumber} changePage={changePage} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} />
      </div>
    </div>
  );
}