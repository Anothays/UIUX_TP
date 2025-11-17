import type { Car } from "@/model/CarsTypes";
type CardProps = {
    car: Car | null;
}


export default function Card({ car }: CardProps) {

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                src={"https://projetcartylion.fr/wp-content/uploads/2020/08/Placeholder.png"}
                alt={car?.modele} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{car?.modele ?? "Unknown Model"}</h2>
                <p>{car?.description ?? "No description available"}</p>
                <p>Price: {car?.prix ?? "N/A"}€</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}