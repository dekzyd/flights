"use client";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocationContext } from "@/context/LocationContext";

const BreadCrumbs = () => {
  const { userLocation } = useLocationContext();
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="#"
      onClick={handleClick}
    >
      Flights
    </Link>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      from {userLocation.state}
    </Typography>,
  ];

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <Stack sx={{ marginY: "15px" }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadCrumbs;
