"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUserLocation } from "@/utils/api";

type Location = {
  county: string;
  state: string;
  country: string;
  currency: string;
};

type LocationContextType = {
  userLocation: Location;
  changeLocation: (newLocation: Location) => void;
};

const LocationContext = createContext<LocationContextType>({
  // Default values
  userLocation: {
    county: "",
    state: "",
    country: "",
    currency: "",
  },
  changeLocation: () => {},
});

export const useLocationContext = () => useContext(LocationContext);

export const LocationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userLocation, setUserLocation] = useState<Location>({
    county: "",
    state: "",
    country: "",
    currency: "",
  });

  const API_KEY = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY as string;

  useEffect(() => {
    const currentLocation = async () => {
      try {
        // Fetch the user's coordinates
        const location = await getUserLocation();

        // Make the OpenCage API call
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${location.lat},${location.lng}&key=${API_KEY}&limit=1`;
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        // Extract county, state, and country from the API response
        const { county, state, country } = data.results[0]?.components || {};
        const currency = data.results[0]?.annotations.currency.iso_code || "";

        if (county && state && country && currency) {
          setUserLocation({
            county,
            state,
            country,
            currency,
          });
        } else {
          console.error(
            "Failed to extract location details from API response."
          );
        }
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };

    currentLocation();
  }, [API_KEY]);

  const changeLocation = (newLocation: Location) => {
    setUserLocation(newLocation);
  };

  return (
    <LocationContext.Provider value={{ userLocation, changeLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
