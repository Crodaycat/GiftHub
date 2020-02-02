import IPaging from './paging';
import ISeller from './seller';

export default interface ISellerSearchResponse {
  paging: IPaging;
  seller: ISeller;
}