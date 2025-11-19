import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";

import type { Car } from "@/model/CarsTypes";

import BigCard from "../UI/BigCard";
import Description from "../UI/Description";
import SimilarProduct from "../UI/SimilarProduct";
import Footer from "../Footer/Footer";
import { getCar } from "@/services/Car.service";
import type { ApiResponseSingle } from "@/model/ApiResponse";

export default function ProductPage() {
    const id = useLoaderData();
    const [car, setCar] = useState<Car | null>(null);
        
    useEffect(() => {
        console.log(id);
        getCar(String(id)).then((data: ApiResponseSingle<Car>) => {
            setCar(data.data);
        });
    }, [id]);

    if (!car) return <div>Chargement...</div>;

    return (
        <div>  
            <BigCard car={car}/>
            <Description text={car.description} />
            <SimilarProduct />
            <Footer />
        </div>
    )
}