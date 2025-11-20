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
  const ALL_OPTION_STRING = "Peu importe";

  useEffect(() => {
    if (step !== 8) return;
    console.log("PARAMS TO SEND ==> ", params);
    const timer = setTimeout(() => {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value === ALL_OPTION_STRING) {
          searchParams.append(key, "");
        } else {
          searchParams.append(key, value.toLowerCase());
        }
      });
      const url = `/ProductsPage?${searchParams.toString()}`;
      navigate(url);
    }, 3000);
    return () => clearTimeout(timer);
  }, [step, params, navigate, ALL_OPTION_STRING]);

  const handleType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, type: value === ALL_OPTION_STRING ? "" : value });
    goNext();
  };

  const handleEtat = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, état: value === ALL_OPTION_STRING ? "" : value });
    goNext();
  };

  const handleBudget = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    let prixMin = "";
    let prixMax = "";
    if (value === "" || value === ALL_OPTION_STRING) {
      prixMin = "";
      prixMax = "";
    } else {
      const parts = value.split("_");
      if (parts.length === 2) {
        if (parts[0] === "-" || parts[0] === "" || parts[0] == "0") {
          prixMin = "";
        } else {
          const minValue = parseInt(parts[0], 10);
          prixMin = isNaN(minValue) || minValue < 0 ? "" : minValue.toString();
        }
        if (parts[1] === "-" || parts[1] === "" || parts[1] == "0") {
          prixMax = "";
        } else {
          const maxValue = parseInt(parts[1], 10);
          prixMax = isNaN(maxValue) || maxValue < 0 ? "" : maxValue.toString();
        }
      }
    }

    setParams({ ...params, prixMin, prixMax });
    goNext();
  };

  const handleCarburant = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, carburant: value === ALL_OPTION_STRING ? "" : value });
    goNext();
  };

  const handleBoite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, boite: value === ALL_OPTION_STRING ? "" : value });
    goNext();
  };

  const handlePlaces = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, places: value === ALL_OPTION_STRING ? "" : value });
    goNext();
  };

  const handlePortes = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, portes: value === ALL_OPTION_STRING ? "" : value });
    goNext();
  };

  const handleMarque = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setParams({ ...params, marque: value === ALL_OPTION_STRING ? "" : value });
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
          <AnswerButton onClick={handleType} label="Citadine" value={"citadine"} />
          <AnswerButton onClick={handleType} label="Compacte" value={"compacte"} />
          <AnswerButton onClick={handleType} label="Berline" value={"berline"} />
          <AnswerButton onClick={handleType} label="SUV" value={"suv"} />
          <AnswerButton onClick={handleType} label="Break" value={"break"} />
          <AnswerButton onClick={handleType} label="Sportive" value={"sportive"} />
          <AnswerButton onClick={handleType} label="Utilitaire" value={"utilitaire"} />
          <AnswerButton onClick={handleType} label={ALL_OPTION_STRING} value={""} />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 1 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Souhaitez-vous une voiture neuve ou d'occasion ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleEtat} label="Neuve" value={"neuve"} />
          <AnswerButton onClick={handleEtat} label="Occasion" value={"occasion"} />
          <AnswerButton onClick={handleEtat} label={ALL_OPTION_STRING} value={""} />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 2 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Quel est votre budget ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleBudget} label="Moins de 10000 €" value={"-_10000"} />
          <AnswerButton onClick={handleBudget} label="10000 - 20000 €" value={"10000_20000"} />
          <AnswerButton onClick={handleBudget} label="20000 - 30000 €" value={"20000_30000"} />
          <AnswerButton onClick={handleBudget} label="30000 - 50000 €" value={"30000_40000"} />
          <AnswerButton onClick={handleBudget} label="Plus de 50000 €" value={"50000_-"} />
          <AnswerButton onClick={handleBudget} label={ALL_OPTION_STRING} value={""} />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 3 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Quel type de carburant préférez-vous ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleCarburant} label="Essence" value={"essence"} />
          <AnswerButton onClick={handleCarburant} label="Diesel" value={"diesel"} />
          <AnswerButton onClick={handleCarburant} label="Électrique" value={"electrique"} />
          <AnswerButton onClick={handleCarburant} label="Hybride" value={"hybride"} />
          <AnswerButton onClick={handleCarburant} label={ALL_OPTION_STRING} value={""} />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 4 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Préférez-vous une boîte manuelle ou automatique ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleBoite} label="Manuelle" value={"manuelle"} />
          <AnswerButton onClick={handleBoite} label="Automatique" value={"automatique"} />
          <AnswerButton onClick={handleBoite} label={ALL_OPTION_STRING} value={""} />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 5 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>De combien de places avez-vous besoin ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handlePlaces} label="2" value={"2"} />
          <AnswerButton onClick={handlePlaces} label="4" value={"4"} />
          <AnswerButton onClick={handlePlaces} label="5" value={"5"} />
          <AnswerButton onClick={handlePlaces} label="7" value={"7"} />
          <AnswerButton onClick={handlePlaces} label={ALL_OPTION_STRING} value={""} />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 6 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Préférez-vous 3 ou 5 portes ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handlePortes} label="3" value={"3"} />
          <AnswerButton onClick={handlePortes} label="5" value={"5"} />
          <AnswerButton onClick={handlePortes} label={ALL_OPTION_STRING} value={""} />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 7 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Recherchez-vous une certaine marque ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleMarque} label="Peugeot" value={"peugeot"} />
          <AnswerButton onClick={handleMarque} label="Renault" value={"renault"} />
          <AnswerButton onClick={handleMarque} label="Citröen" value={"citroen"} />
          <AnswerButton onClick={handleMarque} label="audi" value={"audi"} />
          <AnswerButton onClick={handleMarque} label="mazda" value={"mazda"} />
          <AnswerButton onClick={handleMarque} label="BMW" value={"bmw"} />
          <AnswerButton onClick={handleMarque} label="Mercedes" value={"mercedes"} />
          <AnswerButton onClick={handleMarque} label="Volkswagen" value={"volkswagen"} />
          <AnswerButton onClick={handleMarque} label="Toyota" value={"toyota"} />
          <AnswerButton onClick={handleMarque} label="Nissan" value={"nissan"} />
          <AnswerButton onClick={handleMarque} label="Ford" value={"ford"} />
          <AnswerButton onClick={handleMarque} label="Fiat" value={"fiat"} />
          <AnswerButton onClick={handleMarque} label="Opel" value={"opel"} />
          <AnswerButton onClick={handleMarque} label="Dacia" value={"dacia"} />
          <AnswerButton onClick={handleMarque} label={ALL_OPTION_STRING} value={""} />
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
