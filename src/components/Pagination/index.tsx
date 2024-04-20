import React from 'react';
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb';

import { StyledDiv } from './styles';

interface IListProduct {
  page: number;
  haveNextPage: boolean;
  addPage: () => void;
  subPage: () => void;
}

export const Pagination = ({
  addPage,
  subPage,
  page,
  haveNextPage,
}: IListProduct): React.ReactElement => {
  return (
    <StyledDiv>
      {page > 0 && (
        <button onClick={subPage}>
          <TbArrowLeft />
        </button>
      )}
      {page + 1}
      {haveNextPage && (
        <button onClick={addPage}>
          <TbArrowRight />
        </button>
      )}
    </StyledDiv>
  );
};
