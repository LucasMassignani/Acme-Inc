import { ProductDTO } from '@/dtos/ProductDTO';

import { ListProduct } from '../ListProduct';
import { StyledDiv } from './styles';

interface IList {
  title: string;
  products: Array<ProductDTO>;
}

export const List = ({ products, title }: IList): React.ReactElement => {
  return (
    <StyledDiv>
      <h2>{title}</h2>

      <div>
        {products.map((product) => {
          return (
            <ListProduct
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    </StyledDiv>
  );
};
