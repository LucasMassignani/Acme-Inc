import Link from 'next/link';
import { TbHome, TbShoppingCart, TbUserCircle } from 'react-icons/tb';

import useAuth from '@/providers/auth/useAuth';

import { Banner } from '../Banner';
import { Searchbar } from '../Searchbar';
import {
  StyledDiv,
  StyledHeader,
  StyledHomeLink,
  StyledLeftSide,
  StyledLink,
  StyledTbHeartFilled,
} from './styles';

interface IHeader {
  showBanner?: boolean;
  onSearch: (formData: FormData) => void;
}

export const Header = ({
  showBanner = true,
  onSearch,
}: IHeader): React.ReactElement => {
  const { user } = useAuth();

  return (
    <StyledDiv>
      <StyledHeader>
        <StyledLink href="/">
          <h1>Acme Inc.</h1>
        </StyledLink>
        <Searchbar
          placeholder="O que você está buscando?"
          onSearch={onSearch}
        />
        <StyledLeftSide>
          <StyledHomeLink href="/">
            <TbHome />
          </StyledHomeLink>
          <Link href="/checkout">
            <TbShoppingCart />
          </Link>
          {user && (
            <Link href="/favorites">
              <StyledTbHeartFilled />
            </Link>
          )}
          <Link href="/profile">
            <TbUserCircle />
          </Link>
        </StyledLeftSide>
      </StyledHeader>
      {showBanner && <Banner />}
    </StyledDiv>
  );
};
