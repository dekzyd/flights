import Breadcrumbs from "@/components/breadcrumbs";
import CheapFlights from "@/components/cheapFlights";
import ExploreMap from "@/components/exploreMap";
import FAQComponent from "@/components/faq";
import FilterComponent from "@/components/filter";
import MoreFlights from "@/components/moreFlights";
import PopularAirports from "@/components/popularAirports";
import LanguageLocationCurrency from "@/components/Footer";
import ThemeToggle from "@/components/theme/ThemeToggle";
import ThemedImage from "@/components/ThemedImage";

export default function Home() {
  return (
    <div className="max-w-6xl my-0 mx-auto bg-slate-00">
      <ThemeToggle />
      <ThemedImage />
      <main className="px-20">
        <h1 className="capitalize text-center font-normal text-[36px] leading-[44px]">
          flights
        </h1>
        <div className="">
          <FilterComponent />
        </div>
        <Breadcrumbs />
        <CheapFlights />
        <ExploreMap />
        <PopularAirports />
        <FAQComponent />
        <MoreFlights />
      </main>

      <LanguageLocationCurrency />
    </div>
  );
}
