import Link from 'next/link';
import React from 'react';

import { UserDTO } from '@/dtos/UserDTO';
import SignInCredentialsDTO from '@/providers/auth/dtos/SignInCredentialsDTO';

import { StyledForm, StyledSendContainer } from './styles';

interface IListProduct {
  onRegister: (data: Omit<UserDTO, 'id'> & SignInCredentialsDTO) => void;
}

export const RegisterForm = ({
  onRegister,
}: IListProduct): React.ReactElement => {
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name');
    const username = formData.get('username');
    const password = formData.get('password');

    if (name && username && password) {
      onRegister({
        name: name.toString(),
        username: username.toString(),
        password: password.toString(),
      });
    }
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <h1>Register</h1>
      <div>
        <div>
          <label>Nome</label>
          <input
            autoComplete="on"
            name="name"
            type="text"
          />
        </div>
        <div>
          <label>Username</label>
          <input
            autoComplete="on"
            name="username"
            type="text"
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            autoComplete="on"
            name="password"
            type="password"
          />
        </div>
        <StyledSendContainer>
          <button type="submit">Criar conta</button>
          <Link href="/login">Já possuo uma conta</Link>
        </StyledSendContainer>
      </div>
    </StyledForm>
  );
};
