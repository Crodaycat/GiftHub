import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,
    fetchProductsActionTypes,
    FetchProductsState,
} from './types';

const initialState:FetchProductsState  = {
    pending: false,
    result: null,
    error: null
}

export function productsReducer(state: FetchProductsState = initialState, action: fetchProductsActionTypes): FetchProductsState {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true,
                result: null,
                error: null
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                result: action.result,
                
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
