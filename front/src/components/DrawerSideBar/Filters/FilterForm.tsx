import { useFiltersForm, type FilterValues } from "./FiltersContext";

type FilterFormProps = {
  onFilterChange?: (filters: FilterValues) => void;
};

export default function FilterForm({ onFilterChange }: FilterFormProps) {
  const { filters, setFilters } = useFiltersForm();

  const handleChange = (field: keyof FilterValues, value: string) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
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
    onFilterChange?.(resetFilters);
  };

  return (
    <form className="menu bg-base-200 min-h-full w-80 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filtres</h2>
        <button onClick={handleReset} className="btn btn-sm btn-ghost">
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
            placeholder="Ex: Peugeot, Renault..."
            className="input w-full"
            value={filters.marque}
            onChange={(e) => handleChange("marque", e.target.value)}
          />
        </div>

        {/* Modèle */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Modèle</span>
          </label>
          <input
            type="text"
            placeholder="Ex: 208, Clio..."
            className="input w-full"
            value={filters.modele}
            onChange={(e) => handleChange("modele", e.target.value)}
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
              placeholder="Min"
              className="input w-full"
              value={filters.anneeMin}
              onChange={(e) => handleChange("anneeMin", e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              className="input w-full"
              value={filters.anneeMax}
              onChange={(e) => handleChange("anneeMax", e.target.value)}
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
              placeholder="Min"
              className="input w-full"
              value={filters.prixMin}
              onChange={(e) => handleChange("prixMin", e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              className="input w-full"
              value={filters.prixMax}
              onChange={(e) => handleChange("prixMax", e.target.value)}
            />
          </div>
        </div>

        {/* État */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">État</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={filters.état}
            onChange={(e) => handleChange("état", e.target.value)}
          >
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
            placeholder="Ex: Bleu, Rouge..."
            className="input w-full"
            value={filters.couleur}
            onChange={(e) => handleChange("couleur", e.target.value)}
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
              placeholder="Min"
              className="input w-full"
              value={filters.kilometrageMin}
              onChange={(e) => handleChange("kilometrageMin", e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              className="input w-full"
              value={filters.kilometrageMax}
              onChange={(e) => handleChange("kilometrageMax", e.target.value)}
            />
          </div>
        </div>

        {/* Carburant */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Carburant</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={filters.carburant}
            onChange={(e) => handleChange("carburant", e.target.value)}
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
              placeholder="Min"
              className="input w-full"
              value={filters.puissanceMin}
              onChange={(e) => handleChange("puissanceMin", e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              className="input w-full"
              value={filters.puissanceMax}
              onChange={(e) => handleChange("puissanceMax", e.target.value)}
            />
          </div>
        </div>

        {/* Boîte */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Boîte de vitesses</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={filters.boite}
            onChange={(e) => handleChange("boite", e.target.value)}
          >
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
            className="select select-bordered w-full"
            value={filters.portes}
            onChange={(e) => handleChange("portes", e.target.value)}
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
            className="select select-bordered w-full"
            value={filters.places}
            onChange={(e) => handleChange("places", e.target.value)}
          >
            <option value="">Toutes</option>
            <option value="2">2 places</option>
            <option value="4">4 places</option>
            <option value="5">5 places</option>
            <option value="7">7 places</option>
          </select>
        </div>

        <button className="btn btn-primary w-full">Filtrer</button>
      </div>
    </form>
  );
}
