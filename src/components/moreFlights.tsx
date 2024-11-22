"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid2 from "@mui/material/Grid2";
import Link from "@mui/material/Link";

function MoreFlights() {
  const [tabValue, setTabValue] = React.useState(1); // Initially set to 'Flights from other cities' tab

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Typography variant="h6">Search more flights</Typography>

      <Typography variant="h5" sx={{ mt: 2 }}>
        More places to fly
      </Typography>

      <Tabs value={tabValue} onChange={handleChange}>
        <Tab label="Popular destinations from Abuja" />
        <Tab label="Flights from other cities" />
        <Tab label="Flights to Abuja" />
      </Tabs>

      <Grid2 container spacing={2} sx={{ mt: 2 }}>
        {tabValue === 0 && (
          <Grid2 item xs={12}>
            {/* Content for "Popular destinations from Abuja" tab */}
            <Link href="#" underline="none">
              Flights from Lagos
            </Link>
            <Link href="#" underline="none">
              Flights from Yaoundé
            </Link>
            {/* Add more links as needed */}
          </Grid2>
        )}

        {tabValue === 1 && (
          <>
            <Grid2 item xs={4}>
              {/* Content for "Flights from other cities" tab */}
              <Link href="#" underline="none">
                Flights from Lagos
              </Link>
              <Link href="#" underline="none">
                Flights from Yaoundé
              </Link>
              {/* Add more links as needed */}
            </Grid2>
            <Grid2 item xs={4}>
              {/* Content for "Flights from other cities" tab */}
              <Link href="#" underline="none">
                Flights from Accra
              </Link>
              <Link href="#" underline="none">
                Flights from Cotonou
              </Link>
              {/* Add more links as needed */}
            </Grid2>
            <Grid2 item xs={4}>
              {/* Content for "Flights from other cities" tab */}
              <Link href="#" underline="none">
                Flights from Douala
              </Link>
              <Link href="#" underline="none">
                Flights from Libreville
              </Link>
              {/* Add more links as needed */}
            </Grid2>
          </>
        )}

        {tabValue === 2 && (
          <Grid2 item xs={12}>
            {/* Content for "Flights to Abuja" tab */}
            <Link href="#" underline="none">
              Flights to Abuja
            </Link>
            {/* Add more links as needed */}
          </Grid2>
        )}
      </Grid2>
    </Box>
  );
}

export default MoreFlights;
