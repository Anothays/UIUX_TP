import { createContext, useContext, useState } from "react";

export type FilterValues = {
  marque: string;
  modele: string;
  anneeMin: string;
  anneeMax: string;
  prixMin: string;
  prixMax: string;
  couleur: string;
  kilometrageMin: string;
  kilometrageMax: string;
  carburant: string;
  puissanceMin: string;
  puissanceMax: string;
  boite: string;
  portes: string;
  places: string;
  état: string;
};

type FiltersFormContextType = {
  filters: FilterValues;
  setFilters: React.Dispatch<React.SetStateAction<FilterValues>>;
};

const FiltersFormProvider = createContext<FiltersFormContextType | undefined>(undefined);

export function FilterFormsProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<FilterValues>({
    marque: "",
    modele: "",
    anneeMin: "",
    anneeMax: "",
    prixMin: "",
    prixMax: "",
    couleur: "",
    kilometrageMin: "",
    kilometrageMax: "",
    carburant: "",
    puissanceMin: "",
    puissanceMax: "",
    boite: "",
    portes: "",
    places: "",
    état: "",
  });

  const value: FiltersFormContextType = {
    filters: filters,
    setFilters: setFilters,
  };

  return <FiltersFormProvider.Provider value={value}>{children}</FiltersFormProvider.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFiltersForm() {
  const filtersForm = useContext(FiltersFormProvider);
  if (!filtersForm) throw new Error("useFiltersForm must be used within FiltersFormProvider");
  return filtersForm;
}
