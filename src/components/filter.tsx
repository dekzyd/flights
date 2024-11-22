"use client";

import React from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import dayjs from "dayjs";

const FlightSearchBar = () => {
  const [tripType, setTripType] = React.useState("roundtrip");
  const [passengers, setPassengers] = React.useState(1);
  const [travelClass, setTravelClass] = React.useState("economy");
  const [departureDate, setDepartureDate] = React.useState(dayjs());
  const [returnDate, setReturnDate] = React.useState(dayjs());

  return (
    <Box
      sx={{
        flexDirection: { xs: "column", lg: "row" },
        gap: 2,
        my: 5,
        alignItems: "center",
        padding: 1,
        paddingBottom: 3,
        borderRadius: 2,
        backgroundColor: "#36373A",
        boxShadow: 2,
        maxWidth: "100%",
      }}
      className="relative"
    >
      {/* Trip Type, Passengers, and Class */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          alignItems: "center",
          flexBasis: { xs: "100%", lg: "auto" },
        }}
      >
        {/* Trip Type Selector */}
        <FormControl size="small" sx={{ minWidth: 170, fontSize: "14px" }}>
          <Select
            sx={{
              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            label="Trip"
          >
            <MenuItem value="roundtrip" sx={{ fontSize: "14px" }}>
              <SwapHorizIcon sx={{ mr: 1 }} />
              Round Trip
            </MenuItem>
            <MenuItem value="oneway" sx={{ fontSize: "14px" }}>
              <SwapHorizIcon sx={{ mr: 1 }} />
              One Way
            </MenuItem>
            <MenuItem value="multi-city" sx={{ fontSize: "14px" }}>
              <SwapHorizIcon sx={{ mr: 1 }} />
              Multi-city
            </MenuItem>
          </Select>
        </FormControl>

        {/* Passengers Selector */}
        <FormControl size="small" sx={{ minWidth: 100 }}>
          <Select
            sx={{
              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            label="Passengers"
          >
            {[...Array(10).keys()].map((num) => (
              <MenuItem key={num + 1} value={num + 1}>
                <Person2OutlinedIcon sx={{ mr: 1 }} />
                {num + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Travel Class Selector */}
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            sx={{
              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
            label="Class"
          >
            <MenuItem value="economy">Economy</MenuItem>
            <MenuItem value="premium">Premium Economy</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="first">First Class</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box className="flex gap-5 flex-wrap md:flex-nowrap justify-center md:justify-normal">
        {/* Departure and Destination */}
        <Box className="flex items-center">
          <TextField
            className="flex-1"
            size="small"
            label="From"
            variant="outlined"
            defaultValue="Abuja ABV"
            sx={{ minWidth: 160 }}
          />

          <IconButton
            aria-label="swap locations"
            sx={{ color: "text.secondary" }}
          >
            <SwapHorizIcon />
          </IconButton>

          <TextField
            className="flex-1"
            size="small"
            label="To"
            variant="outlined"
            defaultValue="Europe"
            sx={{ minWidth: 160 }}
          />
        </Box>

        {/* Dates */}
        <Box className="flex items-center gap-5">
          {/* Departure Date */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Departure"
              value={departureDate}
              onChange={(newValue) => setDepartureDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  sx={{ minWidth: 200 }}
                  className="flex-1"
                />
              )}
            />
          </LocalizationProvider>

          {/* Return Date */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Return"
              value={returnDate}
              onChange={(newValue) => setReturnDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  sx={{ minWidth: 200 }}
                  className="flex-1"
                />
              )}
              disabled={tripType === "oneway"}
            />
          </LocalizationProvider>
        </Box>
      </Box>

      {/* Search Button */}
      <Button
        variant="contained"
        className="absolute right-[45%] -bottom-5"
        size="small"
        sx={{
          textTransform: "capitalize",
          px: 2,
          borderRadius: "20px",
          fontSize: "14px",
        }}
      >
        <SearchIcon sx={{ marginRight: "4px" }} />
        Explore
      </Button>
    </Box>
  );
};

export default FlightSearchBar;
