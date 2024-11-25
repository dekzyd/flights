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
      <div className="flex flex-col gap-5 items-center border-transparent border-y border-solid my-5 py-5">
        <div className="flex gap-2 md:gap-8">
          <Button variant="outlined" sx={{ borderRadius: "20px" }}>
            <LanguageIcon
              sx={{
                fontSize: { xs: "12px", sm: "15px" },
                mr: { xs: "2px", sm: "8px" },
              }}
            />
            <Typography
              variant="button"
              sx={{
                textTransform: "capitalize",
                fontSize: { xs: "10px", sm: "15px" },
              }}
            >
              Language . English (United States)
            </Typography>
          </Button>
          <Button variant="outlined" sx={{ borderRadius: "20px" }}>
            <LocationOnOutlinedIcon
              sx={{
                fontSize: { xs: "12px", sm: "15px" },
                mr: { xs: "2px", sm: "8px" },
              }}
            />
            <Typography
              variant="button"
              sx={{
                textTransform: "capitalize",
                fontSize: { xs: "10px", sm: "15px" },
              }}
            >
              Location . {userLocation.country}
            </Typography>
          </Button>
          <Button variant="outlined" sx={{ borderRadius: "20px" }}>
            <PaymentsOutlinedIcon
              sx={{
                fontSize: { xs: "12px", sm: "15px" },
                mr: { xs: "2px", sm: "8px" },
              }}
            />
            <Typography
              variant="button"
              sx={{
                textTransform: "capitalize",
                fontSize: { xs: "10px", sm: "15px" },
              }}
            >
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
        <div className="flex gap-3 md:gap-5">
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
      <div className="px-2 lg:px-20 mb-10 flex justify-center gap-10 lg:gap-20">
        <button className="text-[#AECBFA]">International sites</button>
        <button className="text-[#AECBFA]">Explore flights</button>
      </div>
    </>
  );
};

export default LanguageLocationCurrency;
