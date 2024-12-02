// import { z } from "zod";

// const flyList = z.object({});

export interface FlightListType {
  status: boolean;
  timestamp: number;
  sessionId: string;
  data: Data | string;
}

export interface Data {
  context: Context;
  itineraries: Itinerary[];
  messages: [];
  filterStats: FilterStats;
  flightsSessionId: string;
  destinationImageUrl: string;
}

export interface Context {
  status: string;
  sessionId: string;
  totalResults: number;
}

export interface Itinerary {
  id: string;
  price: Price;
  legs: Leg[];
  isSelfTransfer: boolean;
  isProtectedSelfTransfer: boolean;
  farePolicy: FarePolicy;
  fareAttributes: FareAttributes;
  tags?: string[];
  isMashUp: boolean;
  hasFlexibleOptions: boolean;
  score: number;
}

export interface Price {
  raw: number;
  formatted: string;
  pricingOptionId: string;
}

export interface Leg {
  id: string;
  origin: Origin;
  destination: Destination;
  durationInMinutes: number;
  stopCount: number;
  isSmallestStops: boolean;
  departure: string;
  arrival: string;
  timeDeltaInDays: number;
  carriers: Carriers;
  segments: Segment[];
}

export interface Origin {
  id: string;
  entityId: string;
  name: string;
  displayCode: string;
  city: string;
  country: string;
  isHighlighted: boolean;
}

export interface Destination {
  id: string;
  entityId: string;
  name: string;
  displayCode: string;
  city: string;
  country: string;
  isHighlighted: boolean;
}

export interface Carriers {
  marketing: Marketing[];
  operationType: string;
  operating?: Operating[];
}

export interface Marketing {
  id: number;
  alternateId: string;
  logoUrl: string;
  name: string;
}

export interface Operating {
  id: number;
  alternateId: string;
  logoUrl: string;
  name: string;
}

export interface Segment {
  id: string;
  origin: Origin2;
  destination: Destination2;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  flightNumber: string;
  marketingCarrier: MarketingCarrier;
  operatingCarrier: OperatingCarrier;
}

export interface Origin2 {
  flightPlaceId: string;
  displayCode: string;
  parent: Parent;
  name: string;
  type: string;
  country: string;
}

export interface Parent {
  flightPlaceId: string;
  displayCode: string;
  name: string;
  type: string;
}

export interface Destination2 {
  flightPlaceId: string;
  displayCode: string;
  parent: Parent2;
  name: string;
  type: string;
  country: string;
}

export interface Parent2 {
  flightPlaceId: string;
  displayCode: string;
  name: string;
  type: string;
}

export interface MarketingCarrier {
  id: number;
  name: string;
  alternateId: string;
  allianceId: number;
  displayCode: string;
}

export interface OperatingCarrier {
  id: number;
  name: string;
  alternateId: string;
  allianceId: number;
  displayCode: string;
}

export interface FarePolicy {
  isChangeAllowed: boolean;
  isPartiallyChangeable: boolean;
  isCancellationAllowed: boolean;
  isPartiallyRefundable: boolean;
}

export type FareAttributes = object;

export interface FilterStats {
  duration: Duration;
  airports: Airport[];
  carriers: Carrier[];
  stopPrices: StopPrices;
}

export interface Duration {
  min: number;
  max: number;
  multiCityMin: number;
  multiCityMax: number;
}

export interface Airport {
  city: string;
  airports: Airport2[];
}

export interface Airport2 {
  id: string;
  entityId: string;
  name: string;
}

export interface Carrier {
  id: number;
  alternateId: string;
  logoUrl: string;
  name: string;
}

export interface StopPrices {
  direct: Direct;
  one: One;
  twoOrMore: TwoOrMore;
}

export interface Direct {
  isPresent: boolean;
  formattedPrice: string;
}

export interface One {
  isPresent: boolean;
  formattedPrice: string;
}

export interface TwoOrMore {
  isPresent: boolean;
  formattedPrice: string;
}
