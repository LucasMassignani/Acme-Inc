import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { TbHeart, TbHeartFilled } from 'react-icons/tb';

import { ProductDTO } from '@/dtos/ProductDTO';
import useAuth from '@/providers/auth/useAuth';
import useCart from '@/providers/cart/useCart';
import useFavorite from '@/providers/favorite/useAuth';

import { BuyButton } from '../BuyButton';
import {
  FavoriteButton,
  ImageSkeleton,
  StyledDiv,
  StyledImage,
} from './styles';

interface IListProduct {
  product: ProductDTO;
}

export const ListProduct = ({ product }: IListProduct): React.ReactElement => {
  const { user } = useAuth();

  const { addProduct } = useCart();

  const { isFavorite, toggleFavorite } = useFavorite();

  const [imageLoading, setImageLoading] = React.useState(true);

  const heartFilled = !!user && isFavorite(product.id);

  return (
    <Link href={`/product/${product.id}`}>
      <StyledDiv>
        <FavoriteButton
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            if (user) {
              toggleFavorite(product);
            } else {
              toast.error(
                'Você precisa estar logado para adicionar produtos aos favoritos!',
              );
            }
          }}
        >
          {heartFilled ?
            <TbHeartFilled />
          : <TbHeart />}
        </FavoriteButton>
        {imageLoading && <ImageSkeleton />}
        <StyledImage
          onLoad={() => {
            setImageLoading(false);
          }}
          src={product.imagePreviewURL}
          width={230}
          height={imageLoading ? 0 : 190}
          alt={`Picture of the ${product.name}`}
        />
        <h3>{product.name}</h3>
        <p>R$ {product.value}</p>
        <BuyButton
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            addProduct(product);
            toast.success('Produto adicionado no carrinho!');
          }}
        >
          Comprar
        </BuyButton>
      </StyledDiv>
    </Link>
  );
};
