import { createContext } from 'react';

import AuthContextDTO from './dtos/AuthContextDTO';

const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export default AuthContext;
