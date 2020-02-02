import './styles.css';

import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { useSelector } from 'react-redux';

import { RootReducer } from '../../redux/store';
import IPaginator from '../paginator/paginator';
import ProductItem from '../product-item/product-item';

interface IProductListProps {
  pageNumber: number;
  changePage: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductList (props: IProductListProps) {
  const totalItems = useSelector((state: RootReducer) => state.products.result?.paging.total);
  const pending = useSelector((state: RootReducer) => state.products.pending);
  const error = useSelector((state: RootReducer) => state.products.error);
  const products = useSelector((state: RootReducer) => state.products.result?.results);

  function shouldComponentRender() {
    if(pending === false) return false;

    return true;
  }

  let todoJSX: JSX.Element[] | JSX.Element;

  if(shouldComponentRender()) {
    return (
      <div className="loading-spinner-container">
        <CircularProgress size={90} thickness={5} />
      </div>
    )
  }

  if (products && products.length) {
    todoJSX = products.map((item, index) => <ProductItem key={index} product={item} />);
  } else {
    todoJSX = <p>No hay resultados para listar.</p>;
  }

  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}
      <div className="items-container">
        {todoJSX}
      </div>
      <IPaginator totalItems={totalItems || 0} itemsPerPage={props.itemsPerPage} pageNumber={props.pageNumber} changePage={props.changePage} />
    </div>
  )
}