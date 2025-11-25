import type { Car } from "@/model/CarsTypes";
import Alert from "../UI/Alert";
import Card from "../UI/Card";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

export default function CarList({ carsList }: { carsList?: Car[] }) {
  
  if (!carsList) return <Alert message="Aucun véhicule" type="info" />;
  const [carsListState, setCarsListState] = useState<Car[]>(carsList);
  const [sortByPrice, setSortByPrice] = useState<boolean>(false);

  useEffect(() => {
    console.log("sortByPrice", sortByPrice);
    let sortedCars: Car[] = [];
    if (sortByPrice) {
      sortedCars = [...carsListState].sort((a, b) => a.prix - b.prix);
    } else {
      sortedCars = [...carsListState].sort((a, b) => b.prix - a.prix);
    }
    setCarsListState(sortedCars);
  }, [sortByPrice]);

  if (carsListState.length === 0)
    return (
      <div className="flex justify-center items-center w-full pt-50">
        <Alert message="Aucun véhicule de correspond à vos critères" type="info" />
      </div>
    );

  return (
    <div className="w-full">
      <div className="flex justify-end pr-10">
        <button
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => setSortByPrice(!sortByPrice)}
        >
          Trier par prix {sortByPrice ? "croissant" : "décroissant"}
          <FontAwesomeIcon icon={sortByPrice ? faSortUp : faSortDown} />
        </button>
      </div>
      <div className="p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 transition">
        
        {carsListState.map((car: Car) => (
          <Card car={car} key={car.id} />
        ))}
      </div>
  </div>
  );
}
