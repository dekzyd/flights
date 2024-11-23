"use client";
import React, { useState } from "react";
import {
  getUserLocation,
  findNearbyAirports,
  searchAirport,
  getAvailableFlights,
} from "../../utils/api";
import { useLocationContext } from "@/context/LocationContext";

type Airport = {
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
};

const formData = {
  departureDate: "2024-11-23",
  flightClass: "economy",
  from: "new",
  passengers: 1,
  returnDate: "",
  to: "makurdi",
  tripType: "roundtrip",
};

const Home: React.FC = () => {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { userLocation } = useLocationContext();

  // console.log(userLocation);

  const fetchAirports = async () => {
    setLoading(true);
    setError(null);

    try {
      const location = await getUserLocation();
      // const results = await findNearbyAirports(location.lat, location.lng);
      // const results = await getAvailableFlights(formData);
      const results = await searchAirport(formData.from);
      setAirports(results);
      console.log(results);
    } catch (err) {
      setError("Could not fetch nearby airports. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Find Nearby Airports</h1>
      <button onClick={fetchAirports} disabled={loading}>
        {loading ? "Loading..." : "Get Airports"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Home;
