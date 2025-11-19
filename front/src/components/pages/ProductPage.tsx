import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import type { Car } from "@/model/CarsTypes";

import type { ApiResponseSingle } from "@/model/ApiResponse";
import { getCar } from "@/services/Car.service";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BigCard from "../UI/BigCard";
import Description from "../UI/Description";
import SimilarProduct from "../UI/SimilarProduct";

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
      <Header />
      <BigCard car={car} />
      <Description text={car.description} />
      <SimilarProduct id={car._id} />
      <Footer />
    </div>
  );
}
