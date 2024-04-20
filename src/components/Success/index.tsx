import React from 'react';

import { StyledDiv } from './styles';

export const Success = (): React.ReactElement => {
  return (
    <StyledDiv>
      <h1>Compra finalizada!</h1>
      <p>Parabéns pela sua compra!</p>
      <p>O download do seu JSON já deve ter iniciado</p>
    </StyledDiv>
  );
};
