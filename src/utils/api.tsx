type Airport = {
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
};

export const getUserLocation = async (): Promise<{
  lat: number;
  lng: number;
}> => {
  if (!navigator.geolocation) {
    throw new Error("Geolocation is not supported by your browser.");
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => reject(error)
    );
  });
};

export const findNearbyAirports = async (
  lat: number,
  lng: number
): Promise<Airport[]> => {
  // const API_KEY = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY as string;
  // const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lng}&key=${API_KEY}&limit=10`;
  // const response = await fetch(url);

  const API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY as string;
  // const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports?lat=${lat}&lng=${lng}&locale=en-US`;
  const url =
    "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights?originSkyId=LOND&destinationSkyId=LOS&originEntityId=27544008&destinationEntityId=95673335&date=2024-11-24&cabinClass=economy&adults=1&sortBy=best&currency=NGN&market=en-US&countryCode=NG";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    return JSON.parse(result).data;
  } catch (error) {
    console.error(error);
  }

  // if (!response.ok) {
  //   throw new Error(`Error fetching airports: ${response.statusText}`);
  // }

  // const data = await response.json();

  // const airports: Airport[] = data.results
  //   .filter((result: any) =>
  //     result.components._category?.includes("transport.air")
  //   )
  //   .map((result: any) => ({
  //     name: result.components.airport || "Unknown Airport",
  //     city: result.components.city || "Unknown City",
  //     country: result.components.country || "Unknown Country",
  //     lat: result.geometry.lat,
  //     lng: result.geometry.lng,
  //   }));

  // return airports;
};
