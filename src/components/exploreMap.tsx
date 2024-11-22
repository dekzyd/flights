import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
} from "@mui/material";

const ExploreMap = () => {
  return (
    <Container sx={{ py: 4 }}>
      {/* Section Title */}
      <Typography variant="h5" gutterBottom>
        Find flights from Abuja to anywhere
      </Typography>

      {/* Map Section */}
      <Box
        sx={{
          width: "100%",
          height: "300px",
          backgroundColor: "#2E3B4E", // Placeholder background
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <Typography
          variant="button"
          sx={{
            position: "absolute",
            bottom: "16px",
            backgroundColor: "#000",
            color: "#fff",
            px: 2,
            py: 1,
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          Explore destinations
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ textAlign: "center", color: "#9E9E9E" }}
        >
          {/* Placeholder text for the map */}
          Map content placeholder
        </Typography>
      </Box>

      {/* Airport Information Section */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Popular airports near Abuja
      </Typography>

      <Card
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
            backgroundColor: "#E0F7FA",
            width: "40px",
            height: "40px",
            mr: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#007BFF",
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

export default ExploreMap;
