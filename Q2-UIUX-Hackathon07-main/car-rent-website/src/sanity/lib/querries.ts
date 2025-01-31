import { groq } from "next-sanity";

export const CarGroqQuery = groq`*[_type == "car"] {
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
    "image": image.asset
  }`;
