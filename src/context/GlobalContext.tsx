"use client";
import React, { createContext, useContext, useState } from "react";

// Define the context type
type GlobalContextType = {
  showTickets: boolean;
  setShowTickets: (value: boolean) => void;
};

// Create the context
const GlobalContext = createContext<GlobalContextType>({
  showTickets: false,
  setShowTickets: () => {},
});

// Custom hook
export const useGlobalContext = () => useContext(GlobalContext);

// Provider
export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showTickets, setShowTickets] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ showTickets, setShowTickets }}>
      {children}
    </GlobalContext.Provider>
  );
};
