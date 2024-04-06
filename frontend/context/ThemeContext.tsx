"use client";

import { createContext, useEffect, useState } from "react";

type ThemeContextType = "light" | "dark";

export const ThemeContext = createContext<ThemeContextType>("light");

const getFromLocalStorage = (): ThemeContextType => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return (value as ThemeContextType) || "light";
  }
  return "light";
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<ThemeContextType>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === undefined) return;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
