import { IProductSearchResponse } from '../../../models/products-api';

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export interface IProduct {

}

export interface FetchProductsState {
  pending: boolean,
  result: IProductSearchResponse | null,
  error: any
}

export interface fetchProductsPendingAction {
  type: typeof FETCH_PRODUCTS_PENDING
}

export interface fetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS,
  result: any
}

export interface fetchProductsErrorAction {
  type: typeof FETCH_PRODUCTS_ERROR,
  error: any
}

export type fetchProductsActionTypes = fetchProductsPendingAction | fetchProductsSuccessAction | fetchProductsErrorAction;