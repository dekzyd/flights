"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import { useLocationContext } from "@/context/LocationContext";

function MoreFlights() {
  const [tabValue, setTabValue] = React.useState(1); // Initially set to 'Flights from other cities' tab
  const { userLocation } = useLocationContext();

  const handleChange = (event, newValue: number) => {
    setTabValue(newValue);
  };

  const tabStyle = {
    textTransform: "capitalize",
    fontSize: "13px",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        padding: 2,
      }}
    >
      <Typography variant="h5">Search more flights</Typography>

      <Typography variant="h6" sx={{ mt: 4 }}>
        More places to fly
      </Typography>

      <Tabs
        value={tabValue}
        onChange={handleChange}
        sx={{ borderBottom: 2, borderColor: "divider", mt: 2 }}
      >
        <Tab
          label={`Popular destinations from ${userLocation.state}`}
          sx={tabStyle}
        />
        <Tab label="Flights from other cities" sx={tabStyle} />
        <Tab label={`Flights to ${userLocation.state}`} sx={tabStyle} />
      </Tabs>

      <Grid container sx={{ mt: 2, justifyContent: "space-between" }}>
        {tabValue === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 justify-between w-full gap-2">
            {/* Content for "Popular destinations from Abuja" tab */}
            <Grid size={{ xs: 12, sm: 4 }}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Lagos
              </Link>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Yaoundé
              </Link>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Abidjan
              </Link>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Yaoundé
              </Link>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Abidjan
              </Link>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Abidjan
              </Link>
            </Grid>
          </div>
        )}

        {tabValue === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 justify-between w-full gap-2">
            <Grid size={{ xs: 12, sm: 4 }}>
              {/* Content for "Flights from other cities" tab */}
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Lagos
              </Link>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Cotonou
              </Link>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Douala
              </Link>
            </Grid>
          </div>
        )}

        {tabValue === 2 && (
          <div className="flex justify-between w-full">
            <Grid size={{ xs: 12, sm: 4 }}>
              {/* Content for "Flights to Abuja" tab */}
              <Link href="#" underline="none">
                Flights to {userLocation.state}
              </Link>
            </Grid>
          </div>
        )}
      </Grid>
    </Box>
  );
}

export default MoreFlights;
