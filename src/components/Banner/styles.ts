import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  h2 {
    font-size: clamp(22px, 3vw, 48px);
    text-align: center;
  }

  img {
    width: 40%;
    height: auto;
  }
`;
