import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";

const ExploreMap = () => {
  return (
    <Container sx={{ py: 4 }}>
      {/* Section Title */}
      <Typography variant="h6" gutterBottom>
        Find flights from Abuja to anywhere
      </Typography>

      {/* Map Section */}
      <Box
        sx={{
          width: "100%",
          height: "300px",
          backgroundColor: "#2E3B4E", // Placeholder background
          backgroundImage: "url(/staticmap.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
            fontSize: "13px",
            position: "absolute",
            backgroundColor: "#202124",
            color: "#aecbfa",
            px: 2,
            textTransform: "capitalize",
            py: 1,
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          Explore destinations
        </Typography>
      </Box>

      {/* Airport Information Section */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Popular airports near Abuja
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

export default ExploreMap;
