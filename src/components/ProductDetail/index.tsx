import Image from 'next/image';
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
  ImageSection,
  ImageSkeleton,
  StyledDiv,
  TitleContainer,
} from './styles';

interface IProductDetail {
  product: ProductDTO;
}

export const ProductDetail = ({
  product,
}: IProductDetail): React.ReactElement => {
  const { user } = useAuth();
  const { addProduct } = useCart();
  const { isFavorite, toggleFavorite } = useFavorite();

  const [imageLoading, setImageLoading] = React.useState(true);

  const heartFilled = !!user && isFavorite(product.id);

  return (
    <StyledDiv>
      <ImageSection loading={String(imageLoading)}>
        {imageLoading && <ImageSkeleton />}
        <Image
          onLoad={() => {
            setImageLoading(false);
          }}
          src={product.imageURL}
          width={690}
          height={570}
          alt={`Picture of the ${product.name}`}
          priority
        />
      </ImageSection>
      <div>
        <div>
          <TitleContainer>
            <h2>{product.name}</h2>
            <FavoriteButton
              onClick={() => {
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
          </TitleContainer>
          <p>R$ {product.value}</p>
          <p>{product.description}</p>
        </div>
        <BuyButton
          onClick={() => {
            addProduct(product);
            toast.success('Produto adicionado no carrinho!');
          }}
        >
          Comprar
        </BuyButton>
      </div>
    </StyledDiv>
  );
};
