"use client";

import { criar_rotas } from "@/utils/functions";
import { Rota } from "@/types";
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
  rotas: Rota[];
}

const AppContext = createContext<ContextProps>({} as ContextProps);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [rotas, setRotas] = useState<Rota[]>([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    
    const rotas_local = localStorage.getItem("rotas")
    
    if (rotas_local) {
      setRotas(JSON.parse(rotas_local))
    } else {
      const rotas = criar_rotas()
      setRotas(rotas)
      localStorage.setItem("rotas", JSON.stringify(rotas))
    }

    if (user) {
      setUser(JSON.parse(user));
      console.log("User: ", user);
    }
  }, []);

  const value = { user, setUser,rotas };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
