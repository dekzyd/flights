import { searchAirport, getAvailableFlights } from "@/utils/api";
import { FlightListType } from "@/types/FlightListType";

const getTickets = async (
  data: {
    from: string;
    passengers: number;
    to: string;
    tripType: string;
    flightClass: string;
    departureDate: string;
    returnDate?: string;
  },
  setShowTickets: (value: boolean) => void,
  setTicketsData: (value: FlightListType | undefined) => void,
  setIsLoading: (value: boolean) => void
) => {
  const { from, to } = data;

  try {
    const [fromDetails, toDetails] = await Promise.all([
      searchAirport(from),
      searchAirport(to),
    ]);

    if (!fromDetails || !toDetails) {
      throw new Error("Could not fetch airport details.");
    }

    const { skyId: fromSkyId, entityId: fromEntityId } = fromDetails;
    const { skyId: toSkyId, entityId: toEntityId } = toDetails;

    try {
      const newData = {
        ...data,
        fromSkyId,
        fromEntityId,
        toSkyId,
        toEntityId,
      };

      const result = await getAvailableFlights(newData);
      //   console.log(result);

      if (result) setShowTickets(true);
      setTicketsData(result);
      setIsLoading(false);
    } catch (error) {
      console.error("Error getting available flights:", error);
    }
  } catch (error) {
    console.error("Error in getTickets:", error);
  }
};

export default getTickets;
