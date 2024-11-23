"use client";
import React, { useState } from "react";
import { getUserLocation, findNearbyAirports } from "../../utils/api";
import { useLocationContext } from "@/context/LocationContext";

type Airport = {
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
};

const Home: React.FC = () => {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { userLocation } = useLocationContext();

  const fetchAirports = async () => {
    setLoading(true);
    setError(null);

    try {
      // const location = await getUserLocation();
      // const results = await findNearbyAirports(location.lat, location.lng);
      // setAirports(results);
      // console.log(results);
      console.log(userLocation);
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
      <ul>
        {airports.map((airport, index) => (
          <li key={index}>
            {airport.name} - {airport.city}, {airport.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
