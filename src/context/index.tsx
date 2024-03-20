"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface AppContextType {
  theme: string;
  isOpen: boolean;
  setTheme: (theme: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const AppContext = createContext<AppContextType>({
  theme: "light",
  isOpen: true,
  setTheme: (theme) => console.warn("no theme provider"),
  setIsOpen: (isOpen) => console.warn("no isOpen provider"),
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>("light");
  const [isOpen, setIsOpen] = useState(true);
  const appContextValue = { theme, setTheme, isOpen, setIsOpen };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}
