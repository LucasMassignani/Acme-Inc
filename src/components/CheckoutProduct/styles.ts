import Image from 'next/image';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e1e1e1;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  gap: 16px;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 5px;
`;

export const ImageSkeleton = styled.div`
  width: 115px;
  height: 95px;
  border-radius: 5px;
  background-color: #e1e9ee;
`;

export const DescriptionSection = styled.div`
  display: flex;

  gap: 16px;

  p {
    display: -webkit-box;
    display: -moz-box;
    max-width: 300px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    -moz-line-clamp: 2;
    -moz-box-orient: vertical;
    overflow: hidden;
  }

  @media screen and (max-width: 375px) {
    p {
      display: none;
    }
  }
`;

export const CheckoutSection = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0;
  }

  & > button {
    color: #e43245;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;

    & > button {
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }

  @media screen and (max-width: 425px) {
    justify-content: center;
  }
`;
