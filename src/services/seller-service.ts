import { mlApi } from '../react-app-env.d';

export function findSellerById(id: number): Promise<Response> {
  return fetch(`${mlApi}search?seller_id=${id}`);
}
