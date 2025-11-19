import { useCars } from "@/contexts/CarsContext";
import { getCars } from "@/services/Car.service";
import { useEffect } from "react";
import CarList from "../CarList/CarList";
import Loader from "../UI/Loader";
import FilterForm from "./Filters/FilterForm";

export default function DrawerSideBar() {
  const { cars, setCars, carsAreLoading, setCarsAreLoading } = useCars();

  useEffect(() => {
    setCarsAreLoading(true);
    getCars()
      .then((data) => {
        setCars(data.data);
      })
      .finally(() => {
        setCarsAreLoading(false);
      });
  }, []);

  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {carsAreLoading ? (
          <div className="opacity-50 bg-gray-200 h-full">
            <Loader />
          </div>
        ) : (
          <CarList carsList={cars} />
        )}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
        <FilterForm />
      </div>
    </div>
  );
}
