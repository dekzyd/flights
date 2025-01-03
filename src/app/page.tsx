"use client";
import CheapFlights from "@/components/cheapFlights";
import ExploreMap from "@/components/exploreMap";
import Faq from "@/components/faq";
import FlightSearchBar from "@/components/filter";
import MoreFlights from "@/components/moreFlights";
import LanguageLocationCurrency from "@/components/Footer";
import ThemeToggle from "@/components/theme/ThemeToggle";
import ThemedImage from "@/components/ThemedImage";
import FlightList from "@/components/FlightList";
import { useGlobalContext } from "@/context/GlobalContext";
import { useEffect } from "react";
import Loading from "@/components/Loading";

export default function Home() {
  const { showTickets, isLoading } = useGlobalContext();

  useEffect(() => {
    console.log(showTickets);
  }, [showTickets]);

  return (
    <div className="max-w-6xl my-0 mx-auto">
      <ThemeToggle />
      <ThemedImage />
      <main className="px-2 md:px-4 lg:px-20">
        <h1 className="capitalize text-center mt-5  font-normal text-5xl leading-[44px]">
          flights
        </h1>
        <div className="">
          <FlightSearchBar />
        </div>
        {isLoading && <Loading />}
        {showTickets && <FlightList />}
        <CheapFlights />
        <ExploreMap />
        {/* <PopularAirports /> */}
        <Faq />
        <MoreFlights />
        <LanguageLocationCurrency />
      </main>
    </div>
  );
}
