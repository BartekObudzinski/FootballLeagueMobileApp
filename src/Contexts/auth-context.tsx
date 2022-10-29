import { createContext, ReactNode, useState } from 'react';
import React from 'react';

export const AuthContext = createContext<{
  isUserAuth: boolean;
  setIsUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isUserAuth: false,
  setIsUserAuth: () => {},
});

export const AuthContextProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [isUserAuth, setIsUserAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isUserAuth,
        setIsUserAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
