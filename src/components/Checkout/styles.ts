import Color from 'color';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  gap: 24px;

  & > div {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 45px 80px;
  }

  h2 {
    font-size: clamp(32px, 2.5vw, 48px);
    text-align: center;
    margin: 24px 0 0;
  }

  & > button {
    width: 100%;
    max-width: 300px;
    font-size: 18px;
    border-radius: 6px;
    border: 1px solid ${Color('#abf1bc').darken(0.12).hex()};

    background: #abf1bc;
    &:hover {
      background-color: ${Color('#abf1bc').darken(0.12).hex()};
    }

    &:active {
      background-color: ${Color('#abf1bc').darken(0.15).hex()};
    }
  }
`;
