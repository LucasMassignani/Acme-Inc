import { CheckoutDTO } from '@/dtos/CheckoutDTO';
import { ProductDTO } from '@/dtos/ProductDTO';

export default interface CartContextDTO {
  cart: CheckoutDTO[];
  addProduct(product: ProductDTO): void;
  removeProduct(product: ProductDTO): void;
  removeQuantity(product: ProductDTO): void;
  finishPurchase(): void;
}
