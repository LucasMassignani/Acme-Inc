import React from 'react';

import { StyledSection } from './styles';

interface ISection {
  children: React.ReactElement;
}

export const Section = ({ children }: ISection): React.ReactElement => {
  return <StyledSection>{children}</StyledSection>;
};
