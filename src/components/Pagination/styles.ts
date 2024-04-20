import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;

  font-size: 16px;
  margin: 16px 0 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;

    svg {
      width: 18px;
      height: auto;
    }
  }
`;
