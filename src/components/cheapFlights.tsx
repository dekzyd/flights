import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Grid2,
} from "@mui/material";

const flightData = [
  {
    destination: "San Francisco",
    price: "NGN 2,855,201",
    dates: "Nov 25 – Dec 2",
    stops: "2 stops · 22 hr 48 min",
    airline: "Alaska, British Airways",
    image: "https://via.placeholder.com/200", // Replace with actual image URL
  },
  {
    destination: "Rome",
    price: "NGN 1,139,721",
    dates: "Dec 5 – Dec 12",
    stops: "2 stops · 15 hr",
    airline: "ITA, Ethiopian",
    image: "https://via.placeholder.com/200", // Replace with actual image URL
  },
  {
    destination: "New York",
    price: "NGN 1,484,966",
    dates: "Feb 2 – Feb 9",
    stops: "1 stop · 18 hr 25 min",
    airline: "Royal Air Maroc",
    image: "https://via.placeholder.com/200", // Replace with actual image URL
  },
  {
    destination: "Paris",
    price: "NGN 1,440,337",
    dates: "Jan 24 – Jan 30",
    stops: "1 stop · 9 hr 45 min",
    airline: "Royal Air Maroc",
    image: "https://via.placeholder.com/200", // Replace with actual image URL
  },
  {
    destination: "London",
    price: "NGN 1,051,512",
    dates: "Jan 31 – Feb 7",
    stops: "1 stop · 10 hr 15 min",
    airline: "Royal Air Maroc",
    image: "https://via.placeholder.com/200", // Replace with actual image URL
  },
  {
    destination: "Singapore",
    price: "NGN 1,858,238",
    dates: "Nov 29 – Dec 5",
    stops: "1 stop · 27 hr 50 min",
    airline: "Turkish Airlines",
    image: "https://via.placeholder.com/200", // Replace with actual image URL
  },
];

const CheapFlights = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom>
        Cheap flights from Abuja
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Popular trips from Abuja
      </Typography>
      <Grid2 container spacing={3}>
        {flightData.map((flight, index) => (
          <Grid2
            xs={12}
            sm={6} // 2 columns for tablets and above
            key={index}
          >
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                height="140"
                image={flight.image}
                alt={flight.destination}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {flight.destination}
                </Typography>
                <Typography variant="body1">{flight.price}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {flight.dates}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {flight.stops}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {flight.airline}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default CheapFlights;
