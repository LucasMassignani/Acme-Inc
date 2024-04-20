import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  padding: 50px 0;

  & > div {
    flex: 1;
  }

  h3,
  p {
    width: 100%;
  }

  p {
    margin: 0 0 14px;
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ImageSection = styled.div<{ loading: string }>`
  margin: 0 30px 0 0;
  img {
    border-radius: 5px;
    width: 100%;
    height: ${({ loading }) => (loading === 'true' ? 0 : 'auto')};
  }

  @media screen and (max-width: 425px) {
    margin: 0 0 15px;
  }
`;

export const ImageSkeleton = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 82.6%;
  border-radius: 5px;
  background-color: #e1e9ee;
`;

export const FavoriteButton = styled.button`
  background: transparent;
  border: none;
  svg {
    color: #e43245;

    height: 32px;
    width: 32px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
