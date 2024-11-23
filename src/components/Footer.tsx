"use client";
import Link from "next/link";
import { Button, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import { useLocationContext } from "@/context/LocationContext";

const LanguageLocationCurrency = () => {
  const { userLocation } = useLocationContext();
  return (
    <>
      <div className="px-20 flex flex-col gap-5 items-center border-transparent border-y border-solid my-5 py-5">
        <div className="flex gap-8">
          <Button variant="outlined" sx={{ borderRadius: "20px" }}>
            <LanguageIcon fontSize="small" sx={{ mr: "8px" }} />
            <Typography variant="button" sx={{ textTransform: "capitalize" }}>
              Language . English (United States)
            </Typography>
          </Button>
          <Button variant="outlined" sx={{ borderRadius: "20px" }}>
            <LocationOnOutlinedIcon fontSize="small" sx={{ mr: "8px" }} />
            <Typography variant="button" sx={{ textTransform: "capitalize" }}>
              Location . {userLocation.country}
            </Typography>
          </Button>
          <Button variant="outlined" sx={{ borderRadius: "20px" }}>
            <PaymentsOutlinedIcon fontSize="small" sx={{ mr: "8px" }} />
            <Typography variant="button" sx={{ textTransform: "capitalize" }}>
              Currency . {userLocation.currency}
            </Typography>
          </Button>
        </div>
        <p className="text-center text-sm w-2/3">
          Current language and currency options applied: English (United States)
          - {userLocation.country} - {userLocation.currency}
          <br />
          Displayed currencies may differ from the currencies used to purchase
          flights.{" "}
          <Link href="#" className="text-[#AECBFA]">
            Learn more
          </Link>
        </p>
        <div className="flex gap-5">
          <Link href="#" className="text-[#AECBFA]">
            About
          </Link>
          <Link href="#" className="text-[#AECBFA]">
            Privacy
          </Link>
          <Link href="#" className="text-[#AECBFA]">
            Terms
          </Link>
          <Link href="#" className="text-[#AECBFA]">
            Join user studies
          </Link>
          <Link href="#" className="text-[#AECBFA]">
            Feedback
          </Link>
          <Link href="#" className="text-[#AECBFA]">
            Help Center
          </Link>
        </div>
      </div>
      <div className="px-20 mb-10 flex justify-center gap-20">
        <button className="text-[#AECBFA]">International sites dropdown</button>
        <button className="text-[#AECBFA]">Explore flights dropdown</button>
      </div>
    </>
  );
};

export default LanguageLocationCurrency;
