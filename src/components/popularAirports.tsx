import React from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import { useLocationContext } from "@/context/LocationContext";
// import { searchAirport } from "../utils/api";

const PopularAirports = () => {
  const { userLocation } = useLocationContext();
  return (
    <Container sx={{ py: 4 }}>
      {/* Airport Information Section */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Popular airports near {userLocation.state}
      </Typography>

      <Card
        variant="outlined"
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "2px solid #fff",
            backgroundColor: "#8AB4F8",
            width: "30px",
            height: "30px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "white",
              transform: "rotate(-90deg)",
            }}
          >
            ✈
          </Typography>
        </Box>
        <CardContent>
          <Typography variant="body1" fontWeight="bold">
            Nnamdi Azikiwe International Airport (ABV)
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Abuja · 36 min · 26 km
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PopularAirports;
