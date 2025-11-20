import { useCars } from "@/contexts/CarsContext";
import { useLocation, useSearchParams } from "react-router";
import { useFiltersForm, type FilterValues } from "./FiltersContext";

export default function FilterForm() {
  const { filters, setFilters } = useFiltersForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { cars } = useCars();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
  };

  const handleReset = () => {
    const resetFilters: FilterValues = {
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
    };
    setFilters(resetFilters);
    setSearchParams({ page: "1", limit: "10" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();

    // Ajouter seulement les filtres non vides
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== "") {
        params.set(key, value);
      }
    });

    // Ajouter la pagination par défaut
    params.set("page", "1");
    params.set("limit", "10");

    setSearchParams(params);
  };

  return (
    <form onSubmit={handleSubmit} className="menu bg-base-200 min-h-full w-80 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          Filtres
          {cars.length > 0 ? (
            <span className="badge badge-soft badge-primary ml-1 px-1">
              {cars.length} résultat{cars.length > 1 ? "s" : ""}
            </span>
          ) : null}
        </h2>
        <button type="button" onClick={handleReset} className="btn btn-sm btn-ghost">
          Réinitialiser
        </button>
      </div>

      <div className="space-y-4">
        {/* Marque */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marque</span>
          </label>
          <input
            type="text"
            name="marque"
            placeholder="Ex: Peugeot, Renault..."
            className="input w-full"
            value={filters.marque}
            onChange={handleChange}
          />
        </div>

        {/* Modèle */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Modèle</span>
          </label>
          <input
            type="text"
            name="modele"
            placeholder="Ex: 208, Clio..."
            className="input w-full"
            value={filters.modele}
            onChange={handleChange}
          />
        </div>

        {/* Année */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Année</span>
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              name="anneeMin"
              placeholder="Min"
              className="input w-full"
              value={filters.anneeMin}
              onChange={handleChange}
            />
            <input
              type="number"
              name="anneeMax"
              placeholder="Max"
              className="input w-full"
              value={filters.anneeMax}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Prix */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Prix (€)</span>
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              name="prixMin"
              placeholder="Min"
              className="input w-full"
              value={filters.prixMin}
              onChange={handleChange}
            />
            <input
              type="number"
              name="prixMax"
              placeholder="Max"
              className="input w-full"
              value={filters.prixMax}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* État */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">État</span>
          </label>
          <select name="état" className="select select-bordered w-full" value={filters.état} onChange={handleChange}>
            <option value="">Tous</option>
            <option value="neuve">Neuve</option>
            <option value="occasion">Occasion</option>
          </select>
        </div>

        {/* Couleur */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Couleur</span>
          </label>
          <input
            type="text"
            name="couleur"
            placeholder="Ex: Bleu, Rouge..."
            className="input w-full"
            value={filters.couleur}
            onChange={handleChange}
          />
        </div>

        {/* Kilométrage */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Kilométrage (km)</span>
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              name="kilometrageMin"
              placeholder="Min"
              className="input w-full"
              value={filters.kilometrageMin}
              onChange={handleChange}
            />
            <input
              type="number"
              name="kilometrageMax"
              placeholder="Max"
              className="input w-full"
              value={filters.kilometrageMax}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Carburant */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Carburant</span>
          </label>
          <select
            name="carburant"
            className="select select-bordered w-full"
            value={filters.carburant}
            onChange={handleChange}
          >
            <option value="">Tous</option>
            <option value="essence">Essence</option>
            <option value="diesel">Diesel</option>
            <option value="électrique">Électrique</option>
            <option value="hybride">Hybride</option>
          </select>
        </div>

        {/* Puissance */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Puissance (ch)</span>
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              name="puissanceMin"
              placeholder="Min"
              className="input w-full"
              value={filters.puissanceMin}
              onChange={handleChange}
            />
            <input
              type="number"
              name="puissanceMax"
              placeholder="Max"
              className="input w-full"
              value={filters.puissanceMax}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Boîte */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Boîte de vitesses</span>
          </label>
          <select name="boite" className="select select-bordered w-full" value={filters.boite} onChange={handleChange}>
            <option value="">Toutes</option>
            <option value="manuelle">Manuelle</option>
            <option value="automatique">Automatique</option>
          </select>
        </div>

        {/* Portes */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nombre de portes</span>
          </label>
          <select
            name="portes"
            className="select select-bordered w-full"
            value={filters.portes}
            onChange={handleChange}
          >
            <option value="">Tous</option>
            <option value="3">3 portes</option>
            <option value="5">5 portes</option>
          </select>
        </div>

        {/* Places */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nombre de places</span>
          </label>
          <select
            name="places"
            className="select select-bordered w-full"
            value={filters.places}
            onChange={handleChange}
          >
            <option value="">Toutes</option>
            <option value="2">2 places</option>
            <option value="4">4 places</option>
            <option value="5">5 places</option>
            <option value="7">7 places</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Filtrer
        </button>
      </div>
    </form>
  );
}
