'use client';

import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

import { RegisterForm } from '@/components/RegisterForm';
import { api } from '@/fakeapi';
import useAuth from '@/providers/auth/useAuth';

import { StyledMain } from './styles';

export default function Home() {
  const { user, loading, updateUser } = useAuth();

  if (!loading && user) {
    redirect('/profile');
  }

  return (
    <StyledMain>
      <RegisterForm
        onRegister={(data) => {
          api
            .register(data)
            .then((user) => {
              toast.success('Usuário criado com sucesso');
              updateUser(user);
            })
            .catch((err: Error) => {
              toast.error(err.message);
            });
        }}
      />
    </StyledMain>
  );
}
