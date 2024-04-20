import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > div {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 45px 80px;
  }

  h2 {
    font-size: clamp(32px, 2.5vw, 48px);
    text-align: center;
    margin: 24px 0;
  }
`;
