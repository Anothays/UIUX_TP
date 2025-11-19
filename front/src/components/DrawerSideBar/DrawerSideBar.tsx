import type { Car } from "@/model/CarsTypes";
import { getCars } from "@/services/Car.service";
import { useEffect, useState } from "react";
import CarList from "../CarList/CarList";
import FilterForm from "./Filters/FilterForm";

export default function DrawerSideBar() {
  const [cars, setCars] = useState<Car[] | undefined>(undefined);

  useEffect(() => {
    getCars().then((data) => {
      setCars(data.data);
    });
  }, []);

  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <CarList carsList={cars} />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
        <FilterForm />
      </div>
    </div>
  );
}
