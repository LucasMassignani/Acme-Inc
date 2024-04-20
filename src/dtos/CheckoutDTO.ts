import { ProductDTO } from './ProductDTO';

export interface CheckoutDTO {
  quantity: number;
  product: ProductDTO;
}
