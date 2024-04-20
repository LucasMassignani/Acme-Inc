import toast from 'react-hot-toast';

import useAuth from '@/providers/auth/useAuth';
import useCart from '@/providers/cart/useCart';

import { CheckoutProduct } from '../CheckoutProduct';
import { StyledDiv } from './styles';

export const Checkout = (): React.ReactElement => {
  const { user } = useAuth();
  const { cart: checkoutProducts, finishPurchase } = useCart();

  const total = checkoutProducts.reduce((acc, checkoutProduct) => {
    return acc + checkoutProduct.quantity * checkoutProduct.product.value;
  }, 0);

  return (
    <StyledDiv>
      <h2>Checkout</h2>

      <div>
        {checkoutProducts.map((product) => {
          return (
            <CheckoutProduct
              key={product.product.id}
              checkoutProduct={product}
            />
          );
        })}
      </div>
      {checkoutProducts.length > 0 && (
        <>
          <div>
            <p>Total: R$ {total}</p>
          </div>
          <button
            onClick={() => {
              if (user) {
                finishPurchase();
              } else {
                toast.error(
                  'Você precisa estar logado para finalizar a compra',
                );
              }
            }}
          >
            Finalizar Compra
          </button>
        </>
      )}
    </StyledDiv>
  );
};
