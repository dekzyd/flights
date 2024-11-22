import Breadcrumbs from "@/components/breadcrumbs";
import CheapFlights from "@/components/cheapFlights";
import ExploreMap from "@/components/exploreMap";
import Faq from "@/components/faq";
import FilterComponent from "@/components/filter";
import MoreFlights from "@/components/moreFlights";
import PopularAirports from "@/components/popularAirports";

import Link from "next/link";
import ThemeToggle from "@/components/theme/ThemeToggle";
import ThemedImage from "@/components/ThemedImage";

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
          <FilterComponent />
        </div>
        <Breadcrumbs />
        <CheapFlights />
        <ExploreMap />
        <PopularAirports />
        <Faq />
        <MoreFlights />
      </main>
      <footer className="px-20 flex flex-col gap-5 items-center border-y border-solid">
        <div>
          <button>Language . [chosen language]</button>
          <button>Location . [chosen Location]</button>
          <button>Currency . [location currency]</button>
        </div>
        <p className="text-center w-1/2">
          Current language and currency options applied: English (United States)
          - Nigeria - NGN Displayed currencies may differ from the currencies
          used to purchase flights. Learn more
        </p>
        <div>
          <Link href="#">About</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Join user studies</Link>
          <Link href="#">Feedback</Link>
          <Link href="#">Help Center</Link>
        </div>
        <hr />
      </footer>
      <div className="px-20 flex justify-center gap-20">
        <button>International sites dropdown</button>
        <button>Explore flights dropdown</button>
      </div>
    </div>
  );
}
