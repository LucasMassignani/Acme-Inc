'use client';

import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

import { LoginForm } from '@/components/LoginForm';
import useAuth from '@/providers/auth/useAuth';

import { StyledMain } from './styles';

export default function Home() {
  const { user, loading, signIn } = useAuth();

  if (!loading && user) {
    redirect('/profile');
  }

  return (
    <StyledMain>
      <LoginForm
        onLogin={(data) => {
          signIn(data).catch((err: Error) => {
            toast.error(err.message);
          });
        }}
      />
    </StyledMain>
  );
}
