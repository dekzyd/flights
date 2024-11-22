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
        <Tab label="Popular destinations from Abuja" sx={tabStyle} />
        <Tab label="Flights from other cities" sx={tabStyle} />
        <Tab label="Flights to Abuja" sx={tabStyle} />
      </Tabs>

      <Grid2 container spacing={2} sx={{ mt: 2 }}>
        {tabValue === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 justify-between w-full gap-2">
            {/* Content for "Popular destinations from Abuja" tab */}
            <Grid2 item xs={12} sm={4}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Lagos
              </Link>
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Yaoundé
              </Link>
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Abidjan
              </Link>
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Yaoundé
              </Link>
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Abidjan
              </Link>
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Abidjan
              </Link>
            </Grid2>
          </div>
        )}

        {tabValue === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 justify-between w-full gap-2">
            <Grid2 item xs={4}>
              {/* Content for "Flights from other cities" tab */}
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Lagos
              </Link>

              {/* Add more links as needed */}
            </Grid2>
            <Grid2 item xs={4}>
              {/* Content for "Flights from other cities" tab */}

              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Cotonou
              </Link>
              {/* Add more links as needed */}
            </Grid2>
            <Grid2 item xs={4} flexDirection="column">
              {/* Content for "Flights from other cities" tab */}
              <Link href="#" underline="none" sx={{ fontSize: "15px" }}>
                Flights from Douala
              </Link>

              {/* Add more links as needed */}
            </Grid2>
          </div>
        )}

        {tabValue === 2 && (
          <div className="flex justify-between w-full">
            <Grid2 item xs={12} sx={{ fontSize: "15px" }}>
              {/* Content for "Flights to Abuja" tab */}
              <Link href="#" underline="none">
                Flights to Abuja
              </Link>
              {/* Add more links as needed */}
            </Grid2>
          </div>
        )}
      </Grid2>
    </Box>
  );
}

export default MoreFlights;
