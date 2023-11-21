"use client";

import { createContext, useContext, useState, useEffect } from "react";

type User = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface ContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AppContext = createContext<ContextProps>({} as ContextProps);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setUser(JSON.parse(user));
      console.log("User: ", user);
    }
  }, []);

  const value = { user, setUser };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
