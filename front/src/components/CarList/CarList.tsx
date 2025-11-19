import type { Car } from "@/model/CarsTypes";
import Alert from "../UI/Alert";
import Card from "../UI/Card";

export default function CarList({ carsList }: { carsList?: Car[] }) {
  if (!carsList) return <Alert message="Aucun véhicule" type="info" />;

  if (carsList.length === 0)
    return (
      <div className="flex justify-center items-center w-full h-full">
        <Alert message="Aucun véhicule de correspond à vos critères" type="info" />
      </div>
    );

  return (
    <div className="p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 transition">
      {carsList?.map((car: Car) => (
        <Card car={car} key={car.id} />
      ))}
    </div>
  );
}
