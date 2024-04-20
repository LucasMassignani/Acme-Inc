import Color from 'color';
import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  h1 {
    font-weight: 700;
  }

  & > div {
    max-width: 500px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 12px;

    background-color: #efefef;
    padding: 32px;
    border: 1px solid #e3e3e3;
    border-radius: 15px;

    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  input {
    width: 100%;
    padding: 4px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

export const StyledSendContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 2px 6px;

    background-color: #efefef;
    border: 1px solid black;
    border-radius: 5px;

    &:hover {
      background-color: ${Color('#efefef').darken(0.12).hex()};
    }

    &:active {
      background-color: ${Color('#efefef').darken(0.15).hex()};
    }
  }
`;
