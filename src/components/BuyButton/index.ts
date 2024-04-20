import Color from 'color';
import styled from 'styled-components';

export const BuyButton = styled.button`
  background: #e43245;
  border: 0;
  border-radius: 5px;
  width: 100%;
  padding: 6px 0;

  font-size: 18px;
  color: #ffffff;

  &:hover {
    background-color: ${Color('#e43245').darken(0.12).hex()};
  }

  &:active {
    background-color: ${Color('#e43245').darken(0.15).hex()};
  }
`;
