"use client";
import React, { createContext, useContext, useState } from "react";
import { FlightListType } from "@/types/FlightListType";

// Define the context type
type GlobalContextType = {
  showTickets: boolean;
  ticketsData: FlightListType;
  isLoading: boolean;
  setTicketsData: (value: FlightListType) => void;
  setShowTickets: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
};

const initialTicketData = {
  status: false,
  timestamp: 0,
  sessionId: "",
  data: "",
};

// Create the context
const GlobalContext = createContext<GlobalContextType>({
  showTickets: false,
  setShowTickets: () => {},
  ticketsData: initialTicketData,
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
  const [ticketsData, setTicketsData] =
    useState<FlightListType>(initialTicketData);
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
