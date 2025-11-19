import { useCars } from "@/contexts/CarsContext";
import type { ApiResponse } from "@/model/ApiResponse";
import type { Car } from "@/model/CarsTypes";
import { getCars } from "@/services/Car.service";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router";
import CarList from "../CarList/CarList";
import Loader from "../UI/Loader";
import Pagination from "../UI/Pagination";
import FilterForm from "./Filters/FilterForm";

export default function DrawerSideBar() {
  const { cars, setCars, carsAreLoading, setCarsAreLoading, paginationSettings, setPaginationSettings } = useCars();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const updatePagination = (data: Pick<ApiResponse<Car>, "pagination">) => {
    if (data.pagination) {
      setPaginationSettings({
        currentPage: data.pagination.currentPage,
        itemsPerPage: data.pagination.itemsPerPage,
        totalPages: data.pagination.totalPages,
      });
    }
  };

  const fetchCars = async (params?: Record<string, string> & { page?: string; limit?: string }) => {
    setCarsAreLoading(true);
    try {
      const data = await getCars(params);
      setCars(data.data);
      updatePagination(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setCarsAreLoading(false);
    }
  };

  const handlePageClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const page = e.currentTarget.value;
    const limit = "10";

    const currentParams: { [key: string]: string } = {};
    searchParams.forEach((value, key) => {
      currentParams[key] = value;
    });

    const newParams = { ...currentParams, page, limit };

    const newSearchParams = new URLSearchParams();
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        newSearchParams.set(key, value);
      }
    });
    setSearchParams(newSearchParams);

    await fetchCars(newParams);
  };

  useEffect(() => {
    // Récupérer les paramètres de l'URL
    const params: { [key: string]: string } = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    // Si pas de page dans l'URL, utiliser la page 1 par défaut
    if (!params.page) {
      params.page = "1";
    }
    if (!params.limit) {
      params.limit = "10";
    }

    fetchCars(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {carsAreLoading ? (
          <div className="opacity-50 bg-gray-300 h-full">
            <Loader />
          </div>
        ) : (
          <div>
            <CarList carsList={cars} />
            {paginationSettings && <Pagination {...paginationSettings} handleClick={handlePageClick} />}
          </div>
        )}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
        <FilterForm />
      </div>
    </div>
  );
}
