import IPaging from './paging';
import IProduct from './product';

export interface IProductSearchResponse {
  paging: IPaging;
  results: IProduct[];
}