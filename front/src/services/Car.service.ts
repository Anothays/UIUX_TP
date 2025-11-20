import type { FilterValues } from "@/components/DrawerSideBar/Filters/FiltersContext";
import type { ApiResponse, ApiResponseSingle } from "@/model/ApiResponse";
import type { Car } from "@/model/CarsTypes";

export async function getCars(params?: (FilterValues & { page?: string; limit?: string }) | Record<string, string>) {
    const url = new URL(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/cars`);
    setUrlRequestParams(url, params);
    const data = await fetch(url);
    if (!data.ok) throw new Error('Erreur lors de la récupération des voitures');
    const jsonData = await data.json();
    return jsonData as ApiResponse<Car>;
}

export async function getCar(id: string) {
    const data = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/cars/${id}`);
    if (!data.ok) throw new Error('Erreur lors de la récupération de la voiture');
    const cars = await data.json();
    return cars as ApiResponseSingle<Car>;
}

export async function getSimilarCars(id: string) {
    const data = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/cars/${id}/similar`);
    if (!data.ok) throw new Error('Erreur lors de la récupération des voitures similaires');
    const cars = await data.json();
    return cars as ApiResponse<Car>;
}

export function setUrlRequestParams(url: URL, params?: Record<string, string>) {
    if (!params) return url;
    Object.entries(params).forEach((param) => {
        url.searchParams.set(param[0], param[1]);
    });
    return url;
}

