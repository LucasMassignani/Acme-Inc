'use client';

import React from 'react';

import { UserDTO } from '@/dtos/UserDTO';
import { api } from '@/fakeapi';

import AuthContext from './AuthContext';
import AuthStateDTO from './dtos/AuthStateDTO';
import SignInCredentialsDTO from './dtos/SignInCredentialsDTO';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<AuthStateDTO>({} as AuthStateDTO);

  React.useEffect(() => {
    const user = localStorage.getItem('@AcmeInc:user');

    if (user) {
      setData({ user: JSON.parse(user) });
    }

    setLoading(false);
  }, []);

  const signIn = async ({ username, password }: SignInCredentialsDTO) => {
    const response = await api.login({
      username,
      password,
    });

    const user = response;

    localStorage.setItem('@AcmeInc:user', JSON.stringify(user));

    setData({ user });
  };

  const signOut = () => {
    localStorage.removeItem('@AcmeInc:user');

    setData({} as AuthStateDTO);
  };

  const updateUser = (updateData: UserDTO) => {
    localStorage.setItem('@AcmeInc:user', JSON.stringify(updateData));
    setData({
      user: updateData,
    });
  };

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
