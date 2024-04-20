import React from 'react';
import { TbMinus, TbPlus, TbTrash } from 'react-icons/tb';

import { CheckoutDTO } from '@/dtos/CheckoutDTO';
import useCart from '@/providers/cart/useCart';

import {
  CheckoutSection,
  DescriptionSection,
  ImageSkeleton,
  StyledDiv,
  StyledImage,
} from './styles';

interface ICheckoutProduct {
  checkoutProduct: CheckoutDTO;
}

export const CheckoutProduct = ({
  checkoutProduct,
}: ICheckoutProduct): React.ReactElement => {
  const { addProduct, removeQuantity, removeProduct } = useCart();

  const [imageLoading, setImageLoading] = React.useState(true);

  return (
    <StyledDiv>
      <DescriptionSection>
        {imageLoading && <ImageSkeleton />}
        <StyledImage
          onLoad={() => {
            setImageLoading(false);
          }}
          src={checkoutProduct.product.imagePreviewURL}
          width={imageLoading ? 0 : 115}
          height={95}
          alt={`Picture of the ${checkoutProduct.product.name}`}
        />
        <div>
          <h3>{checkoutProduct.product.name}</h3>
          <p>{checkoutProduct.product.description}</p>
        </div>
      </DescriptionSection>
      <CheckoutSection>
        <p>R$ {checkoutProduct.product.value}</p>
        <div>
          <button
            onClick={() => {
              removeQuantity(checkoutProduct.product);
            }}
          >
            <TbMinus />
          </button>
          <p>{checkoutProduct.quantity}</p>
          <button
            onClick={() => {
              addProduct(checkoutProduct.product);
            }}
          >
            <TbPlus />
          </button>
        </div>
        <button
          onClick={() => {
            removeProduct(checkoutProduct.product);
          }}
        >
          <TbTrash />
        </button>
      </CheckoutSection>
    </StyledDiv>
  );
};
