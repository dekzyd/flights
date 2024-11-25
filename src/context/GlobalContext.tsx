"use client";
import React, { createContext, useContext, useState } from "react";

// Define the context type
type GlobalContextType = {
  showTickets: boolean;
  ticketsData: any;
  isLoading: boolean;
  setTicketsData: (value: any) => void;
  setShowTickets: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
};

// Create the context
const GlobalContext = createContext<GlobalContextType>({
  showTickets: false,
  setShowTickets: () => {},
  ticketsData: [],
  setTicketsData: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

// Custom hook
export const useGlobalContext = () =>
  useContext<GlobalContextType>(GlobalContext);

// Provider
export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showTickets, setShowTickets] = useState<boolean>(false);
  const [ticketsData, setTicketsData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        showTickets,
        setShowTickets,
        ticketsData,
        setTicketsData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
