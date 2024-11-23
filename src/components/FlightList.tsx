import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
  Button,
} from "@mui/material";

interface Flight {
  time: string;
  airline: string;
  duration: string;
  stops: string;
  co2: string;
  price: string;
  route: string;
}

const flights: Flight[] = [
  {
    time: "2:45 PM – 8:40 AM",
    airline: "EgyptAir",
    duration: "18 hr 55 min",
    stops: "1 stop (8 hr 30 min CAI)",
    co2: "639 kg CO₂",
    price: "NGN 934,614",
    route: "LOS – LHR",
  },
  {
    time: "11:55 PM – 8:00 AM",
    airline: "Air France",
    duration: "9 hr 5 min",
    stops: "1 stop (1 hr 25 min CDG)",
    co2: "343 kg CO₂",
    price: "NGN 2,032,639",
    route: "LOS – LHR",
  },
  {
    time: "11:55 PM – 6:25 PM",
    airline: "Air France, KLM",
    duration: "19 hr 30 min",
    stops: "2 stops (CDG, AMS)",
    co2: "408 kg CO₂",
    price: "NGN 2,107,295",
    route: "LOS – LCY",
  },
  {
    time: "11:10 PM – 4:50 AM",
    airline: "British Airways",
    duration: "6 hr 40 min",
    stops: "Nonstop",
    co2: "320 kg CO₂",
    price: "NGN 5,295,832",
    route: "LOS – LHR",
  },
];

const FlightList = () => {
  return (
    <Box sx={{ padding: 2, maxWidth: 800, margin: "auto" }}>
      {flights.map((flight, index) => (
        <Card key={index} sx={{ marginBottom: 2, borderRadius: 2 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              {/* Time and Airline */}
              <Grid item xs={12} sm={4}>
                <Typography variant="h6">{flight.time}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {flight.airline}
                </Typography>
              </Grid>

              {/* Duration and Stops */}
              <Grid item xs={12} sm={3}>
                <Typography variant="body1">{flight.duration}</Typography>
                <Typography variant="body2" color="error">
                  {flight.stops}
                </Typography>
              </Grid>

              {/* CO2 and Price */}
              <Grid item xs={12} sm={3}>
                <Typography variant="body2" color="text.secondary">
                  {flight.co2}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  {flight.price}
                </Typography>
              </Grid>

              {/* Route */}
              <Grid item xs={12} sm={2} textAlign="right">
                <Typography variant="body2" color="text.secondary">
                  {flight.route}
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
