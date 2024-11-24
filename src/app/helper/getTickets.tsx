import { searchAirport, getAvailableFlights } from "@/utils/api";
import { Dispatch, SetStateAction } from "react";

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
  setShowTickets: Dispatch<SetStateAction<boolean>>
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

    // console.log("From:", fromSkyId, fromEntityId);
    // console.log("To:", toSkyId, toEntityId);

    try {
      const newData = {
        ...data,
        fromSkyId,
        fromEntityId,
        toSkyId,
        toEntityId,
      };

      const result = await getAvailableFlights(newData);
      console.log(result);
      if (result) setShowTickets(true);
    } catch (error) {
      console.error("Error getting available flights:", error);
    }
  } catch (error) {
    console.error("Error in getTickets:", error);
  }
};

export default getTickets;
