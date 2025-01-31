export interface CarsDataType {
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  tags: string[];
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
}
