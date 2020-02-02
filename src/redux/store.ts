import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { productsReducer } from './MercadoLibreAPI/products/reducers'

const rootReducer = combineReducers({products: productsReducer });

export type RootReducer = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;