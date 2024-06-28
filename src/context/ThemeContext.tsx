"use client";

import { createContext, useState, useEffect } from "react";

import Loading from '@/app/loading';

interface ThemeContextType {
  theme: string;
  changeTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("dark");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
  }, []);

  if (!isMounted) {
    return <div><Loading /></div>;
  }

  const changeTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
