import { createContext } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false,
    name: null,
    contact: null,
    email: null,
    role: null,
    login: () => {},
    logout: () => {}
});
