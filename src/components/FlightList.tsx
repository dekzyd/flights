import React, { useEffect } from "react";
import { ticketDataClone } from "../app/data";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";

import { useGlobalContext } from "@/context/GlobalContext";

const FlightList = () => {
  const { ticketsData } = useGlobalContext();
  useEffect(() => {
    console.log(ticketsData);
  }, [ticketsData]);

  const ticketArray = ticketsData.data?.itineraries;

  // Transform the ticketArray into flightDetails
  const flightDetails = ticketArray.map((flight: any) => {
    const { legs, price } = flight;
    const { logoUrl, name: carrierName } = legs[0].carriers.marketing[0];
    const totalDuration = legs.reduce(
      (acc: any, leg: any) => acc + leg.durationInMinutes,
      0
    ); // Summing up durations
    const formattedPrice = price.formatted;
    const stops = legs.reduce((acc: any, leg: any) => acc + leg.stopCount, 0);
    const departureTime = legs[0].departure;
    const arrivalTime = legs[legs.length - 1].arrival;
    const originId = legs[0].origin.id;
    const destinationId = legs[legs.length - 1].destination.id;

    return {
      logoUrl,
      carrierName,
      totalDuration,
      formattedPrice,
      stops,
      departureTime,
      arrivalTime,
      originId,
      destinationId,
    };
  });

  return (
    <Box sx={{ padding: 2, maxWidth: 800, margin: "auto" }}>
      {flightDetails.map((flight: any, index: number) => (
        <Card key={index} sx={{ marginBottom: 2, borderRadius: 2 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              {/* Time and Airline */}
              <Grid item xs={12} sm={4}>
                <Typography variant="h6">
                  {new Date(flight.departureTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  –{" "}
                  {new Date(flight.arrivalTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {flight.carrierName}
                </Typography>
              </Grid>

              {/* Duration and Stops */}
              <Grid item xs={12} sm={3}>
                <Typography variant="body1">
                  {Math.floor(flight.totalDuration / 60)} hr{" "}
                  {flight.totalDuration % 60} min
                </Typography>
                <Typography variant="body2" color="error">
                  {flight.stops} stop{flight.stops !== 1 ? "s" : ""}
                </Typography>
              </Grid>

              {/* Price */}
              <Grid item xs={12} sm={3}>
                <Typography variant="h6" color="text.primary">
                  {flight.formattedPrice}
                </Typography>
              </Grid>

              {/* Route */}
              <Grid item xs={12} sm={2} textAlign="right">
                <Typography variant="body2" color="text.secondary">
                  {flight.originId} – {flight.destinationId}
                </Typography>
                <Button variant="outlined" size="small" sx={{ marginTop: 1 }}>
                  View details
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default FlightList;
