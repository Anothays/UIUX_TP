import { useEffect, useState } from "react";
import Card from "./Card"
import type { Car } from "@/model/CarsTypes";
import { getSimilarCars } from "@/services/Car.service";
import type { ApiResponse } from "@/model/ApiResponse";

type SimilarProductProps = {
    id: string;
}

export default function SimilarProduct({ id }: SimilarProductProps) {
    
    const [similarProducts, setSimilarProducts] = useState<Car[]>([]);

    useEffect(() => {
        getSimilarCars(id).then((data: ApiResponse<Car>) => {
            setSimilarProducts(data.data);
        });
    }, [id]);

    return (
        <div className="my-10 px-5">
            <h1 className="text-[25px] text-center">Produits similaires</h1>

            <div className="carousel w-full py-10">
                {similarProducts.map((car, index) => (
                    <div key={index} className="carousel-item w-1/6 px-5">
                        <Card key={index} car={car} />
                    </div>
                ))}
            </div>
        </div>
    )
}