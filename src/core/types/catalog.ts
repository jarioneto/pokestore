import { IProduct } from './product';

export interface ICatalog {
  items: IProduct[];
  currentItems: IProduct[];
  filter: string;
  page: number;
  hasNextPage: boolean;
}
