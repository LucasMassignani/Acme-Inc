import Image from 'next/image';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  max-width: 265px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #e1e1e1;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  h3,
  p {
    width: 100%;
  }

  p {
    margin: 0 0 14px;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 5px;
`;

export const ImageSkeleton = styled.div`
  width: 230px;
  height: 190px;
  border-radius: 5px;
  background-color: #e1e9ee;
`;

export const FavoriteButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 20px;
  top: 20px;
  svg {
    color: #e43245;

    height: 32px;
    width: 32px;
  }
`;
