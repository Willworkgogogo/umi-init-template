import { useState, useCallback } from 'react';

interface IUser {
  Name: string;
  Job: string;
}

export default function useAuthModel() {
  const [user, setUser] = useState<IUser | null>(null);
  const signin = useCallback((account, password) => {
    setUser({
      Name: account,
      Job: 'web developer',
    });
    // signin implementation
    // setUser(user from signin API)
  }, []);
  const signout = useCallback(() => {
    setUser(null);
    // signout implementation
    // setUser(null)
  }, []);

  return {
    user,
    signin,
    signout,
  };
}
