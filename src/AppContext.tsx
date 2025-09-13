import { createContext, useContext, useState } from "react";

type Ingredient = {
  id: number;
  name: string;
  price: number;
};

type AppContextType = {
  selections: Record<string, Ingredient[]>;
  updateSelections: (category: string, ingredients: Ingredient[]) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selections, setSelections] = useState<Record<string, Ingredient[]>>(
    {}
  );

  const updateSelections = (category: string, ingredients: Ingredient[]) => {
    setSelections((prev) => ({
      ...prev,
      [category]: ingredients,
    }));
  };

  return (
    <AppContext.Provider value={{ selections, updateSelections }}>
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
