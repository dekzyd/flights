import Breadcrumbs from "@/components/breadcrumbs";
import CheapFlights from "@/components/cheapFlights";
import ExploreMap from "@/components/exploreMap";
import Faq from "@/components/faq";
import FlightSearchBar from "@/components/filter";
import MoreFlights from "@/components/moreFlights";
import PopularAirports from "@/components/popularAirports";
import LanguageLocationCurrency from "@/components/Footer";
import ThemeToggle from "@/components/theme/ThemeToggle";
import ThemedImage from "@/components/ThemedImage";
import FlightList from "@/components/FlightList";

export default function Home() {
  return (
    <div className="max-w-6xl my-0 mx-auto bg-slate-00">
      <ThemeToggle />
      <ThemedImage />
      <main className="px-20">
        <h1 className="capitalize text-center font-normal text-5xl leading-[44px]">
          flights
        </h1>
        <div className="">
          <FlightSearchBar />
        </div>
        <Breadcrumbs />
        <FlightList />
        <CheapFlights />
        <ExploreMap />
        <PopularAirports />
        <Faq />
        <MoreFlights />
      </main>

      <LanguageLocationCurrency />
    </div>
  );
}
