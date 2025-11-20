import type { FilterValues } from "@/components/DrawerSideBar/Filters/FiltersContext";
import Header from "@/components/Header/Header";
import Loader from "@/components/UI/Loader";
import Stepper from "@/components/UI/Stepper/Stepper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AnswerButton from "./AnswerButton";
import styles from "./DiscoverPage.module.css";

export interface OutletContextType {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

type paramsType = Pick<
  FilterValues,
  "prixMin" | "prixMax" | "carburant" | "marque" | "état" | "boite" | "places" | "portes"
> & {
  type: string;
};

const initValue: paramsType = {
  boite: "",
  carburant: "",
  marque: "",
  places: "",
  portes: "",
  prixMax: "",
  prixMin: "",
  état: "",
  type: "",
};

export default function DiscoverPage() {
  const [step, setStep] = useState(0);
  const [params, setParams] = useState<paramsType>(initValue);
  const navigate = useNavigate();

  useEffect(() => {
    if (step !== 8) return;
    const timer = setTimeout(() => {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value && value !== "") searchParams.append(key, value);
      });
      const url = `/ProductsPage?${searchParams.toString()}`;
      navigate(url);
    }, 3000);
    return () => clearTimeout(timer);
  }, [step, params, navigate]);

  const handleType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, type: value === "Peu importe" ? "" : value });
    goNext();
  };

  const handleEtat = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;

    setParams({ ...params, état: value === "Peu importe" ? "" : value });
    goNext();
  };

  const handleBudget = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    let prixMin = "";
    let prixMax = "";

    // Extraire les nombres de la chaîne (supprimer les espaces et caractères non numériques sauf les tirets)
    const numbers = value.match(/\d+/g)?.map(Number) || [];

    if (value === "Peu importe" ? "" : value) {
      prixMin = "";
      prixMax = "";
    } else if (value.includes("Moins de")) {
      // "Moins de 10 000 €" -> prixMax = 10000
      prixMax = numbers[0]?.toString() || "";
    } else if (value.includes("Plus de")) {
      // "Plus de 50 000 €" -> prixMin = 50000
      prixMin = numbers[0]?.toString() || "";
    } else if (numbers.length >= 2) {
      // "10 000 - 20 000 €" -> prixMin = 10000, prixMax = 20000
      prixMin = numbers[0]?.toString() || "";
      prixMax = numbers[1]?.toString() || "";
    }

    setParams({ ...params, prixMin, prixMax });
    goNext();
  };

  const handleCarburant = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, carburant: value === "Peu importe" ? "" : value });
    goNext();
  };

  const handleBoite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, boite: value === "Peu importe" ? "" : value });
    goNext();
  };

  const handlePlaces = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, places: value === "Peu importe" ? "" : value });
    goNext();
  };

  const handlePortes = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, portes: value === "Peu importe" ? "" : value });
    goNext();
  };

  const handleMarque = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, marque: value === "Peu importe" ? "" : value });
    goNext();
  };

  const goNext = () => {
    setStep(step + 1);
  };

  return (
    <div className="w-full h-full">
      <Header />
      <Stepper step={step} setStep={setStep} />
      <div className={`container mx-auto w-full ${styles.step} ${step === 0 ? "visible" : "hidden"}`}>
        <h2 className={`${styles.title}`}>Quel type de véhicule recherchez-vous ?</h2>
        <div className="px-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <AnswerButton onClick={handleType} label="Citadine" />
          <AnswerButton onClick={handleType} label="Compacte" />
          <AnswerButton onClick={handleType} label="Berline" />
          <AnswerButton onClick={handleType} label="SUV" />
          <AnswerButton onClick={handleType} label="Break" />
          <AnswerButton onClick={handleType} label="Sportive" />
          <AnswerButton onClick={handleType} label="Utilitaire" />
          <AnswerButton onClick={handleType} label="Peu importe" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 1 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Souhaitez-vous un véhicule neuf ou d'occasion ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleEtat} label="Neuf" />
          <AnswerButton onClick={handleEtat} label="Occasion" />
          <AnswerButton onClick={handleEtat} label="Peu importe" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 2 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Quel est votre budget ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleBudget} label="Moins de 10 000 €" />
          <AnswerButton onClick={handleBudget} label="10 000 - 20 000 €" />
          <AnswerButton onClick={handleBudget} label="20 000 - 30 000 €" />
          <AnswerButton onClick={handleBudget} label="30 000 - 50 000 €" />
          <AnswerButton onClick={handleBudget} label="Plus de 50 000 €" />
          <AnswerButton onClick={handleBudget} label="Peu importe" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 3 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Quel type de carburant préférez-vous ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleCarburant} label="Essence" />
          <AnswerButton onClick={handleCarburant} label="Diesel" />
          <AnswerButton onClick={handleCarburant} label="Électrique" />
          <AnswerButton onClick={handleCarburant} label="Hybride" />
          <AnswerButton onClick={handleCarburant} label="Peu importe" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 4 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Préférez-vous une boîte manuelle ou automatique ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleBoite} label="Manuelle" />
          <AnswerButton onClick={handleBoite} label="Automatique" />
          <AnswerButton onClick={handleBoite} label="Peu importe" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 5 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>De combien de places avez-vous besoin ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handlePlaces} label="2" />
          <AnswerButton onClick={handlePlaces} label="4" />
          <AnswerButton onClick={handlePlaces} label="5" />
          <AnswerButton onClick={handlePlaces} label="7" />
          <AnswerButton onClick={handlePlaces} label="Peu importe" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 6 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Préférez-vous 3 ou 5 portes ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handlePortes} label="3" />
          <AnswerButton onClick={handlePortes} label="5" />
          <AnswerButton onClick={handlePortes} label="Peu importe" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 7 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Recherchez-vous une certaine marque ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleMarque} label="Peugeot" />
          <AnswerButton onClick={handleMarque} label="Renault" />
          <AnswerButton onClick={handleMarque} label="Peu importe" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 8 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Nous recherchons votre véhicule...</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <Loader />
        </div>
      </div>
    </div>
  );
}
