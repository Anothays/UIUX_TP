import type { Car } from "@/model/CarsTypes";
import { router } from "@/routes/routes";
type CardProps = {
  car: Car | null;
};

export default function Card({ car }: CardProps) {
  const goToProductPage = () => {
    router.navigate(`/ProductPage/${car?._id}`);
  };
  return (
    <div className="card bg-base-100 flex-1 shadow-sm">
      <figure>
        <img src={car?.image} alt={car?.modele} />
      </figure>
      <div className="card-body shadow-2xl">
        <h2 className="card-title">
          {car?.marque} - {car?.modele ?? "Pas d'information sur le modèle"}
        </h2>
        {/* <p className="dropwhitespace-nowrap truncate">{car?.description ?? "Pas de description"}</p> */}
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="badge badge-info badge-soft">{car?.état}</span>
          {car?.carburant && <span className="badge badge-secondary badge-soft">{car.carburant}</span>}
          {car?.boite && <span className="badge badge-accent badge-soft">{car.boite}</span>}
          {car?.annee && <span className="badge badge-neutral badge-soft">{car.annee}</span>}
          {car?.kilometrage && <span className="badge badge-ghost">{car.kilometrage.toLocaleString()} km</span>}
          {car?.puissance && <span className="badge badge-outline">{car.puissance} ch</span>}
          {car?.portes && <span className="badge badge-outline">{car.portes} portes</span>}
          {car?.places && <span className="badge badge-outline">{car.places} places</span>}
        </div>
        <p className="font-semibold text-2xl w-full text-center">{car?.prix ?? "N/A"}€</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={goToProductPage}>
            Voir
          </button>
        </div>
      </div>
    </div>
  );
}
