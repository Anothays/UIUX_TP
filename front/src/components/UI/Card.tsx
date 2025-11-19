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
        <h2 className="card-title">{car?.modele ?? "Pas d'information sur le modèle"}</h2>
        <p>{car?.description ?? "Pas de description"}</p>
        <p>Price: {car?.prix ?? "N/A"}€</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={goToProductPage}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
