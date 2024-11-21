"use client";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Tooltip,
  MenuItem,
  Menu,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useState } from "react";

const LanguageLocationCurrency = () => {
  const theme = useTheme();

  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [locationAnchorEl, setLocationAnchorEl] = useState(null);
  const [currencyAnchorEl, setCurrencyAnchorEl] = useState(null);

  const handleLanguageOpen = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  // Similar handlers for location and currency

  const [language, setLanguage] = useState("English (United States)");
  const [location, setLocation] = useState("Nigeria");
  const [currency, setCurrency] = useState("NGN");

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Tooltip title="Language">
        <IconButton onClick={handleLanguageOpen}>
          <LanguageIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={languageAnchorEl}
        open={Boolean(languageAnchorEl)}
        onClose={handleLanguageClose}
      >
        <MenuItem
          onClick={() => {
            setLanguage("English (United States)");
            handleLanguageClose();
          }}
        >
          English (United States)
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLanguage("Spanish");
            handleLanguageClose();
          }}
        >
          Spanish
        </MenuItem>
        {/* Add more languages here */}
      </Menu>

      <Tooltip title="Location">
        <IconButton onClick={handleLanguageOpen}>
          <LocationOnIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={locationAnchorEl}
        open={Boolean(locationAnchorEl)}
        onClose={handleLanguageOpen}
      >
        <MenuItem
          onClick={() => {
            setLocation("Nigeria");
            // handleLocationClose();
          }}
        >
          Nigeria
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLocation("United States");
            // handleLocationClose();
          }}
        >
          United States
        </MenuItem>
        {/* Add more locations here */}
      </Menu>

      <Tooltip title="Currency">
        <IconButton onClick={handleLanguageOpen}>
          <CurrencyRupeeIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={currencyAnchorEl}
        open={Boolean(currencyAnchorEl)}
        onClose={handleLanguageOpen}
      >
        <MenuItem
          onClick={() => {
            setCurrency("NGN");
            // handleCurrencyClose();
          }}
        >
          NGN
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrency("USD");
            // handleCurrencyClose();
          }}
        >
          USD
        </MenuItem>
        {/* Add more currencies here */}
      </Menu>

      <Typography variant="body2" sx={{ ml: 1, mr: 2 }}>
        Current language and currency options applied: {language} - {location} -{" "}
        {currency}
      </Typography>

      {/* Add the "Learn more" link here */}
    </Box>
  );
};

export default LanguageLocationCurrency;
