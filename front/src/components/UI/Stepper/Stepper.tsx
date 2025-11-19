import styles from "./Stepper.module.css";

export default function Stepper({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const goNext = () => {
    setStep(step - 1);
  };

  const goPrevious = () => {
    setStep(step + 1);
  };

  return (
    <div className="flex flex-col">
      <ul className="steps lg:steps-horizontal self-center w-1/2 p-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <li key={i} className={`step ${i <= step ? "step-primary" : null} ${styles.step}`}></li>
        ))}
      </ul>
      {/* <button className="btn" disabled={step === 0} onClick={goNext}>
        Précedent
      </button>
      <button className="btn" disabled={step === 5} onClick={goPrevious}>
        Suivant
      </button> */}
    </div>
  );
}
