import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './actions';
import { Dispatch } from 'redux';

function fetchProducts(searchWord: string, limit: number = 50, offset: number = 0) {
    return function (dispatch: Dispatch) {
        dispatch(fetchProductsPending());
        fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${searchWord}&offset=${offset}&limit=${limit}`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res);
            }
            dispatch(fetchProductsSuccess(res));
        })
        .catch(error => {
            dispatch(fetchProductsError(error.error + ', ' + error.message));
        })
    }
}

export default fetchProducts;
