import ISeller from './seller';

export default interface IProduct {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  seller: ISeller;
}