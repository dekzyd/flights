// "use client"; // Ensure responsiveness and interactivity

// import React from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
// } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";

// const FlightSearchBar = () => {
//   const [tripType, setTripType] = React.useState("roundtrip");
//   const [passengers, setPassengers] = React.useState(1);
//   const [travelClass, setTravelClass] = React.useState("economy");
//   const [departureDate, setDepartureDate] = React.useState(dayjs());
//   const [returnDate, setReturnDate] = React.useState(dayjs());

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         gap: 2,
//         alignItems: "center",
//         padding: 2,
//         border: "1px solid #ccc",
//         borderRadius: 2,
//         backgroundColor: "background.paper",
//         boxShadow: 2,
//         maxWidth: "100%",
//       }}
//     >
//       {/* Trip Type Selector */}
//       <FormControl size="small" sx={{ minWidth: 120 }}>
//         <InputLabel>Trip</InputLabel>
//         <Select
//           value={tripType}
//           onChange={(e) => setTripType(e.target.value)}
//           label="Trip"
//         >
//           <MenuItem value="roundtrip">Round Trip</MenuItem>
//           <MenuItem value="oneway">One Way</MenuItem>
//         </Select>
//       </FormControl>

//       {/* Departure Location */}
//       <TextField
//         size="small"
//         label="From"
//         variant="outlined"
//         defaultValue="Abuja ABV"
//       />

//       {/* Arrival Location */}
//       <TextField
//         size="small"
//         label="To"
//         variant="outlined"
//         defaultValue="Europe"
//       />

//       {/* Departure Date */}
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           label="Departure"
//           value={departureDate}
//           onChange={(newValue) => setDepartureDate(newValue)}
//           renderInput={(params) => <TextField {...params} size="small" />}
//         />
//       </LocalizationProvider>

//       {/* Return Date */}
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           label="Return"
//           value={returnDate}
//           onChange={(newValue) => setReturnDate(newValue)}
//           renderInput={(params) => <TextField {...params} size="small" />}
//           disabled={tripType === "oneway"}
//         />
//       </LocalizationProvider>

//       {/* Passengers Selector */}
//       <FormControl size="small" sx={{ minWidth: 120 }}>
//         <InputLabel>Passengers</InputLabel>
//         <Select
//           value={passengers}
//           onChange={(e) => setPassengers(e.target.value)}
//           label="Passengers"
//         >
//           {[...Array(10).keys()].map((num) => (
//             <MenuItem key={num + 1} value={num + 1}>
//               {num + 1}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       {/* Travel Class Selector */}
//       <FormControl size="small" sx={{ minWidth: 120 }}>
//         <InputLabel>Class</InputLabel>
//         <Select
//           value={travelClass}
//           onChange={(e) => setTravelClass(e.target.value)}
//           label="Class"
//         >
//           <MenuItem value="economy">Economy</MenuItem>
//           <MenuItem value="premium">Premium Economy</MenuItem>
//           <MenuItem value="business">Business</MenuItem>
//           <MenuItem value="first">First Class</MenuItem>
//         </Select>
//       </FormControl>

//       {/* Search Button */}
//       <Button
//         variant="contained"
//         size="large"
//         sx={{ width: { xs: "100%", md: "auto" }, whiteSpace: "nowrap" }}
//       >
//         Explore
//       </Button>
//     </Box>
//   );
// };

// export default FlightSearchBar;

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
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: 2,
        alignItems: "center",
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "background.paper",
        boxShadow: 2,
        maxWidth: "100%",
      }}
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
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Trip</InputLabel>
          <Select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            label="Trip"
          >
            <MenuItem value="roundtrip">Round Trip</MenuItem>
            <MenuItem value="oneway">One Way</MenuItem>
          </Select>
        </FormControl>

        {/* Passengers Selector */}
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Passengers</InputLabel>
          <Select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            label="Passengers"
          >
            {[...Array(10).keys()].map((num) => (
              <MenuItem key={num + 1} value={num + 1}>
                {num + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Travel Class Selector */}
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Class</InputLabel>
          <Select
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

      {/* Departure and Destination */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          flexBasis: { xs: "100%", lg: "auto" },
          flexWrap: "wrap",
        }}
      >
        <TextField
          size="small"
          label="From"
          variant="outlined"
          defaultValue="Abuja ABV"
          sx={{ minWidth: 200 }}
        />

        <IconButton
          aria-label="swap locations"
          sx={{ color: "text.secondary" }}
        >
          <SwapHorizIcon />
        </IconButton>

        <TextField
          size="small"
          label="To"
          variant="outlined"
          defaultValue="Europe"
          sx={{ minWidth: 200 }}
        />
      </Box>

      {/* Dates */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          flexBasis: { xs: "100%", lg: "auto" },
          flexWrap: "wrap",
        }}
      >
        {/* Departure Date */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Departure"
            value={departureDate}
            onChange={(newValue) => setDepartureDate(newValue)}
            renderInput={(params) => (
              <TextField {...params} size="small" sx={{ minWidth: 160 }} />
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
              <TextField {...params} size="small" sx={{ minWidth: 160 }} />
            )}
            disabled={tripType === "oneway"}
          />
        </LocalizationProvider>
      </Box>

      {/* Search Button */}
      <Button
        variant="contained"
        size="large"
        sx={{
          width: { xs: "100%", lg: "auto" },
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        Explore
      </Button>
    </Box>
  );
};

export default FlightSearchBar;
