import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  input {
    width: 100%;
    padding: 4px 32px;
    border: 1px solid black;
    border-radius: 20px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 0;
    height: 100%;
    width: 32px;
    background: transparent;
    border: 0;
  }
`;
