import { useSearchParams } from 'next/navigation';
import React from 'react';
import { TbSearch } from 'react-icons/tb';

import { StyledForm } from './styles';

interface IListProduct {
  label?: string;
  placeholder?: string;
  onSearch: (formData: FormData) => void;
}

export const Searchbar = ({
  label,
  placeholder,
  onSearch,
}: IListProduct): React.ReactElement => {
  const searchParams = useSearchParams();
  const search = searchParams.get('query');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const value = formData.get('searchbar');

    if (typeof value === 'string') {
      onSearch(formData);
    }
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <div>
        {label && <label>{label}</label>}
        <input
          defaultValue={search || ''}
          name="searchbar"
          type="text"
          placeholder={placeholder}
        />

        <button type="submit">
          <TbSearch />
        </button>
      </div>
    </StyledForm>
  );
};
