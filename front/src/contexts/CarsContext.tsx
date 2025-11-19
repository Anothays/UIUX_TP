import type { Car } from "@/model/CarsTypes";
import { createContext, useContext, useState } from "react";

type PaginationSettings = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
};

type CarsContextType = {
  cars: Car[];
  setCars: React.Dispatch<React.SetStateAction<Car[]>>;
  carsAreLoading: boolean;
  setCarsAreLoading: React.Dispatch<React.SetStateAction<boolean>>;
  paginationSettings: PaginationSettings | null;
  setPaginationSettings: React.Dispatch<React.SetStateAction<PaginationSettings | null>>;
};

const CarsContext = createContext<CarsContextType | undefined>(undefined);

export function CarsProvider({ children }: { children: React.ReactNode }) {
  const [cars, setCars] = useState<Car[]>([]);
  const [carsAreLoading, setCarsAreLoading] = useState(false);
  const [paginationSettings, setPaginationSettings] = useState<PaginationSettings | null>(null);

  const value = {
    cars,
    setCars,
    carsAreLoading,
    setCarsAreLoading,
    paginationSettings,
    setPaginationSettings,
  };

  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCars() {
  const cars = useContext(CarsContext);
  if (!cars) throw new Error("useCars must be used within CarsProvider");
  return cars;
}
