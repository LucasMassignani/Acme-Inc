import { ProductDTO } from '@/dtos/ProductDTO';

export default interface FavoriteContextDTO {
  favorites: ProductDTO[];
  isFavorite(productId: string): boolean;
  toggleFavorite(product: ProductDTO): void;
}
