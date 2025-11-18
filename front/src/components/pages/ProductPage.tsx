import { useLoaderData } from "react-router";
import { useState } from "react";

import type { Car } from "@/model/CarsTypes";

import BigCard from "../UI/BigCard";
import Description from "../UI/Description";
import SimilarProduct from "../UI/SimilarProduct";
import Footer from "../Footer/Footer";

export default function ProductPage() {
    const id = useLoaderData();

        
    const [car, setCar] = useState<Car>({
        "id": 3,
        "marque": "Volkswagen",
        "modele": "Golf",
        "annee": 2023,
        "prix": 28900,
        "couleur": "Gris",
        "kilometrage": 15000,
        "carburant": "diesel",
        "puissance": 150,
        "boite": "automatique",
        "portes": 5,
        "places": 5,
        "description": "Volkswagen Golf récente, confortable et spacieuse. Parfaite pour les longs trajets.",
        "tags": [
            "compact",
            "diesel",
            "familiale",
            "automatique",
            "confort",
            "routière"
        ],
        "état": "occasion"
    } as unknown as Car)



    return (
        <div>  
            <BigCard car={car}/>
            <Description text={car.description} />
            <SimilarProduct />
            <Footer />
        </div>
    )
}