import { TbLoader } from 'react-icons/tb';
import styled, { keyframes } from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderIcon = styled(TbLoader)`
  width: 32px;
  height: 32px;
  animation: ${rotate} 2s linear infinite;
`;
