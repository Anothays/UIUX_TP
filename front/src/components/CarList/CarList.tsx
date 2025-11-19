import type { Car } from "@/model/CarsTypes";
import { getCars } from "@/services/Car.service";
import { useEffect, useState } from "react";
import Card from "../UI/Card";

export default function CarList({ carsList }: { carsList?: Car[] }) {
  const [cars, setCars] = useState<Car[] | undefined>(carsList);

  useEffect(() => {
    getCars().then((data) => {
      setCars(data.data);
    });
  }, []);

  if (!cars) return <p>Chargement...</p>;

  return (
    <div
      className="p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      // className="p-10 grid grid-cols-1"
    >
      {cars?.map((car: Car) => (
        <Card car={car} key={car.id} />
      ))}
    </div>
  );
}
