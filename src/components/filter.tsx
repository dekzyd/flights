"use client";

import React from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import EastIcon from "@mui/icons-material/East";
import SearchIcon from "@mui/icons-material/Search";
import RepeatIcon from "@mui/icons-material/Repeat";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import dayjs from "dayjs";
import { useLocationContext } from "@/context/LocationContext";
import getTickets from "@/app/helper/getTickets";
import { useGlobalContext } from "@/context/GlobalContext";

type formDataType = {
  tripType: string;
  passengers: number;
  flightClass: string;
  departureDate: string;
  returnDate?: string | undefined;
  from: string;
  to: string;
};

const FlightSearchBar = () => {
  const { userLocation } = useLocationContext();
  const { setShowTickets } = useGlobalContext();
  const [formData, setFormData] = useState<formDataType>({
    tripType: "roundtrip",
    passengers: 1,
    flightClass: "economy",
    departureDate: new Date().toISOString().split("T")[0],
    returnDate: "",
    from: userLocation.state,
    to: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    getTickets(formData, setShowTickets);
    // console.log(formData);
  };

  return (
    <Box
      sx={{
        flexDirection: { xs: "column", lg: "row" },
        gap: 2,
        my: 5,
        alignItems: "center",
        padding: 2,
        paddingBottom: 4,
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
            value={formData.tripType}
            onChange={(e) =>
              setFormData((prev) => {
                return {
                  ...prev,
                  tripType: e.target.value,
                  returnDate:
                    e.target.value === "oneway" ? "" : prev.returnDate,
                };
              })
            }
            label="Trip"
          >
            <MenuItem value="roundtrip" sx={{ fontSize: "14px" }}>
              <SwapHorizIcon sx={{ mr: 1 }} />
              Round Trip
            </MenuItem>
            <MenuItem value="oneway" sx={{ fontSize: "14px" }}>
              <EastIcon sx={{ mr: 1 }} />
              One Way
            </MenuItem>
            <MenuItem value="multi-city" sx={{ fontSize: "14px" }}>
              <RepeatIcon sx={{ mr: 1 }} />
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
            value={formData.passengers}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                passengers: Number(e.target.value),
              }))
            }
            label="Passengers"
          >
            {[...Array(5).keys()].map((num) => (
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
            value={formData.flightClass}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, flightClass: e.target.value }))
            }
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
            value={formData.from}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, from: e.target.value }))
            }
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
            placeholder="Where to?"
            value={formData.to}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, to: e.target.value }))
            }
            sx={{ minWidth: 160 }}
          />
        </Box>

        {/* Dates */}
        <Box className="flex items-center gap-5">
          {/* Departure Date */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Departure"
              value={
                formData.departureDate ? dayjs(formData.departureDate) : null
              }
              onChange={(newValue) =>
                setFormData((prev) => ({
                  ...prev,
                  departureDate: newValue
                    ? newValue.toISOString().split("T")[0]
                    : "",
                }))
              }
            />
          </LocalizationProvider>

          {/* Return Date */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Return"
              value={formData.returnDate ? dayjs(formData.returnDate) : null}
              onChange={(newValue) =>
                setFormData((prev) => ({
                  ...prev,
                  returnDate: newValue
                    ? newValue.toISOString().split("T")[0]
                    : "",
                }))
              }
              disabled={formData.tripType === "oneway"}
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
        onClick={handleSubmit}
      >
        <SearchIcon sx={{ marginRight: "4px" }} />
        Explore
      </Button>
    </Box>
  );
};

export default FlightSearchBar;
