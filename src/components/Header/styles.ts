import Link from 'next/link';
import { TbHeartFilled } from 'react-icons/tb';
import styled from 'styled-components';

import { StyledForm } from '../Searchbar/styles';

export const StyledDiv = styled.div`
  background: radial-gradient(#ffffff, #f3f8fb);
`;

export const StyledLeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;

  gap: 12px;

  a {
    display: flex;
  }

  svg {
    height: 24px;
    width: auto;
  }
`;

export const StyledLink = styled(Link)`
  flex: 1;
`;

export const StyledHomeLink = styled(Link)`
  visibility: hidden;
`;

export const StyledTbHeartFilled = styled(TbHeartFilled)`
  color: #e43245;
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  padding: 0 42px;

  display: flex;
  align-items: center;

  h1 {
    font-size: 16px;
    font-weight: 400;
  }

  ${StyledForm} {
    flex: 1;
  }

  @media screen and (max-width: 425px) {
    padding: 0 12px;

    ${StyledLink} {
      display: none;
    }
    ${StyledHomeLink} {
      visibility: visible;
    }
  }
`;
