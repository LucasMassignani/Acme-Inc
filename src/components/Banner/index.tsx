import Image from 'next/image';

import { StyledDiv } from './styles';

export const Banner = (): React.ReactElement => {
  return (
    <StyledDiv>
      <div>
        <h2>
          Deixe sua imaginação voar
          <br />
          temos de tudo para você!
        </h2>
        <Image
          src="/logo.png"
          width={530}
          height={330}
          alt="Picture of the company logo"
          priority
        />
      </div>
    </StyledDiv>
  );
};
