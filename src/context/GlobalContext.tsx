"use client";
import React, { createContext, useContext, useState } from "react";

// Define the context type
type GlobalContextType = {
  showTickets: boolean;
  ticketsData: any;
  setTicketsData: (value: any) => void;
  setShowTickets: (value: boolean) => void;
};

// Create the context
const GlobalContext = createContext<GlobalContextType>({
  showTickets: false,
  setShowTickets: () => {},
  ticketsData: [],
  setTicketsData: () => {},
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
  const [ticketsData, setTicketsData] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ showTickets, setShowTickets, ticketsData, setTicketsData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
