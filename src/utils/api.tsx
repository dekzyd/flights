import { log } from "console";

type formDataType = {
  tripType: string;
  passengers: number;
  flightClass: string;
  departureDate: Date | string;
  returnDate?: Date | undefined;
  from: string;
  to: string;
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

export const searchAirport = async (airport: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY as string;
  const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${airport}&locale=en-US`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const { skyId, entityId } = result.data[0] || {};
    return { skyId, entityId };
  } catch (error) {
    console.error(error);
  }
};

export const getAvailableFlights = async (formData: formDataType) => {
  const {
    tripType,
    passengers,
    flightClass,
    departureDate,
    returnDate,
    from,
    to,
  } = formData;
  const API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY as string;
  const url = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights?originSkyId=LOND&destinationSkyId=LOS&originEntityId=27544008&destinationEntityId=95673335&date=${departureDate}&returnDate=${returnDate}&cabinClass=${flightClass}&adults=${passengers}&sortBy=best&currency=NGN&market=en-US&countryCode=NG`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return JSON.parse(result).data;
  } catch (error) {
    console.error(error);
  }
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
};
