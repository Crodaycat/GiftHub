import { IProductSearchResponse } from '../../../models/products-api';
import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  fetchProductsErrorAction,
  fetchProductsPendingAction,
  fetchProductsSuccessAction,
} from './types';

export function fetchProductsPending(): fetchProductsPendingAction {
  return {
      type: FETCH_PRODUCTS_PENDING
  }
}

export function fetchProductsSuccess(result: IProductSearchResponse): fetchProductsSuccessAction {
  return {
      type: FETCH_PRODUCTS_SUCCESS,
      result
  }
}

export function fetchProductsError(error: any): fetchProductsErrorAction {
  return {
      type: FETCH_PRODUCTS_ERROR,
      error
  }
}