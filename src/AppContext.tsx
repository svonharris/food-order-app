import { createContext, useContext, useState } from "react";

type AppContextType = {
  totals: Record<string, number>;
  setCategoryTotal: (category: string, total: number) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [totals, setTotals] = useState<Record<string, number>>({});

  const setCategoryTotal = (category: string, total: number) => {
    setTotals((prev) => ({ ...prev, [category]: total }));
  };

  return (
    <AppContext.Provider value={{ totals, setCategoryTotal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
