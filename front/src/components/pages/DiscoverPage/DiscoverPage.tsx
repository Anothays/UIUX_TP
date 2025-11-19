import Header from "@/components/Header/Header";
import Loader from "@/components/UI/Loader";
import Stepper from "@/components/UI/Stepper/Stepper";
import { useState } from "react";
import AnswerButton from "./AnswerButton";
import styles from "./DiscoverPage.module.css";

export interface OutletContextType {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function DiscoverPage() {
  const [step, setStep] = useState(0);

  // Type de voiture
  // Marque
  // Automatique ou manuelle ?
  // Budget
  // occasion
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget.value);
    goNext();
  };

  const goNext = () => {
    setStep(step + 1);
  };

  return (
    <div className="w-full h-full">
      <Header />
      <Stepper step={step} setStep={setStep} />
      <div className={`w-full ${styles.step} ${step === 0 ? "visible" : "hidden"}`}>
        <h2 className={`${styles.title}`}>Quel type de véhicule recherchez-vous ?</h2>
        <div className="px-20 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <AnswerButton onClick={handleClick} label="Citadine" />
          <AnswerButton onClick={handleClick} label="Compacte" />
          <AnswerButton onClick={handleClick} label="Berline" />
          <AnswerButton onClick={handleClick} label="SUV" />
          <AnswerButton onClick={handleClick} label="Break" />
          <AnswerButton onClick={handleClick} label="Sportive" />
          <AnswerButton onClick={(e) => handleClick(e)} label="Utilitaire" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 1 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Souhaitez-vous un véhicule neuf ou d'occasion ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleClick} label="Neuf" />
          <AnswerButton onClick={handleClick} label="Occasion" />
          <AnswerButton onClick={handleClick} label="Les deux" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 2 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Quel est votre budget ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleClick} label="Moins de 10 000 €" />
          <AnswerButton onClick={handleClick} label="10 000 - 20 000 €" />
          <AnswerButton onClick={handleClick} label="20 000 - 30 000 €" />
          <AnswerButton onClick={handleClick} label="30 000 - 50 000 €" />
          <AnswerButton onClick={handleClick} label="Plus de 50 000 €" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 3 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Quel type de carburant préférez-vous ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleClick} label="Essence" />
          <AnswerButton onClick={handleClick} label="Diesel" />
          <AnswerButton onClick={handleClick} label="Électrique" />
          <AnswerButton onClick={handleClick} label="Hybride" />
          <AnswerButton onClick={handleClick} label="Peu importe" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 4 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Préférez-vous une boîte manuelle ou automatique ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleClick} label="Manuelle" />
          <AnswerButton onClick={handleClick} label="Automatique" />
          <AnswerButton onClick={handleClick} label="Peu importe" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 5 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>De combien de places avez-vous besoin ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleClick} label="2" />
          <AnswerButton onClick={handleClick} label="4" />
          <AnswerButton onClick={handleClick} label="5" />
          <AnswerButton onClick={handleClick} label="7" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 6 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Préférez-vous 3 ou 5 portes ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleClick} label="3" />
          <AnswerButton onClick={handleClick} label="5" />
          <AnswerButton onClick={handleClick} label="Peu importe" />
        </div>
      </div>
      <div
        className={` w-full flex flex-col text-center items-center justify-center ${styles.step} ${
          step === 7 ? "visible" : "hidden"
        }`}
      >
        <h2 className={`${styles.title}`}>Recherchez-vous une certaine marque ?</h2>
        <div className="px-20 grid grid-cols-3 gap-4">
          <AnswerButton onClick={handleClick} label="Peugeot" />
          <AnswerButton onClick={handleClick} label="Renault" />
          <AnswerButton onClick={handleClick} label="Peu importe" />
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
