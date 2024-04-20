import React from 'react';

import { UserDTO } from '@/dtos/UserDTO';

import {
  LogoutButton,
  StyledForm,
  StyledSendContainer,
  UpdateButton,
} from './styles';

interface IListProduct {
  user: UserDTO;
  onUpdate: (data: UserDTO) => void;
  onLogout: () => void;
}

export const ProfileForm = ({
  onLogout,
  onUpdate,
  user,
}: IListProduct): React.ReactElement => {
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name');
    const username = formData.get('username');

    if (name && username) {
      onUpdate({
        id: user.id,
        name: name.toString(),
        username: username.toString(),
      });
    }
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <h1>Profile</h1>
      <div>
        <div>
          <label>Nome</label>
          <input
            autoComplete="on"
            name="name"
            type="text"
            defaultValue={user.name}
          />
        </div>
        <div>
          <label>Username</label>
          <input
            autoComplete="on"
            name="username"
            type="text"
            defaultValue={user.username}
          />
        </div>
        <StyledSendContainer>
          <UpdateButton type="submit">Update</UpdateButton>
          <LogoutButton
            type="button"
            onClick={onLogout}
          >
            Logout
          </LogoutButton>
        </StyledSendContainer>
      </div>
    </StyledForm>
  );
};
