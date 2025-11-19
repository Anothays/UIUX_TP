
import type { Car } from "@/model/CarsTypes"
import { router } from "@/routes/routes";

type BigCardProps = {
    car: Car;
}
export default function BigCard({car}: BigCardProps){

    const goBuy = () => {
       router.navigate("/PaymentPage", {state: car.prix});
    }

    return (
        <div className="card card-side bg-base-100 shadow-sm m-10">
            <figure className="w-md">
                <img
                src={car.image}
                alt={`${car.marque} ${car.modele}`} />
            </figure>
            <div className="card-body">
                <h1 className="card-title text-[30px]">{car.marque} {car.modele}</h1>
                <h2 className="text-[17px]">categorie: {car.tags.join(", ")}</h2>
                
                <h2 className="text-[25px]">prix: {car.prix} TTC</h2>
                
                <h3 className="text-[20px] font-medium mt-2">
                    {car.marque} {car.modele} <span className="text-sm font-normal">({car.annee})</span>
                </h3>

                <div className="mt-1 text-[22px] font-bold text-primary">
                    {car.prix.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })} TTC
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                    <span className="badge badge-info">{car.état}</span>
                    <span className="badge badge-outline">{car.couleur}</span>
                    <span className="badge badge-outline">{car.carburant}</span>
                    <span className="badge badge-outline">{car.boite}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                    <div>
                        <div><strong>Kilométrage :</strong> {car.kilometrage.toLocaleString("fr-FR")} km</div>
                        <div><strong>Puissance :</strong> {car.puissance} ch</div>
                    </div>
                    <div>
                        <div><strong>Portes :</strong> {car.portes}</div>
                        <div><strong>Places :</strong> {car.places}</div>
                    </div>
                </div>

                <p className="mt-3 text-sm">{car.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                    tags: {car.tags.map((t) => (
                        <span key={t} className="badge badge-sm badge-outline">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="card-actions justify-end">
                    <button 
                        className="btn btn-primary"
                        onClick={goBuy}
                    >
                        Acheter
                    </button>
                </div>
            </div>
        </div>
    )
}