'use client';

import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

import { ProfileForm } from '@/components/ProfileForm';
import { api } from '@/fakeapi';
import useAuth from '@/providers/auth/useAuth';

import { StyledMain } from './styles';

export default function Home() {
  const { user, loading, updateUser, signOut } = useAuth();

  if (!loading && !user) {
    redirect('/login');
  }

  return (
    <StyledMain>
      {!loading && (
        <ProfileForm
          onLogout={signOut}
          onUpdate={(data) => {
            api
              .updateUser(data)
              .then((values) => {
                updateUser(values);
                toast.success('Dados Salvos!');
              })
              .catch((err: Error) => {
                toast.error(err.message);
              });
          }}
          user={user}
        />
      )}
    </StyledMain>
  );
}
