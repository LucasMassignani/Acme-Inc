import Link from 'next/link';
import React from 'react';

import SignInCredentialsDTO from '@/providers/auth/dtos/SignInCredentialsDTO';

import { StyledForm, StyledSendContainer } from './styles';

interface IListProduct {
  onLogin: (data: SignInCredentialsDTO) => void;
}

export const LoginForm = ({ onLogin }: IListProduct): React.ReactElement => {
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const username = formData.get('username');
    const password = formData.get('password');

    if (username && password) {
      onLogin({
        password: password.toString(),
        username: username.toString(),
      });
    }
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <h1>Login</h1>
      <div>
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
          <button type="submit">Entrar</button>
          <Link href="/register">Quero me cadastrar</Link>
        </StyledSendContainer>
      </div>
    </StyledForm>
  );
};
