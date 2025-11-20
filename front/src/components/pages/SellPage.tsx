import Header from "../Header/Header";
import Alert from "../UI/Alert";

export default function SellPage() {
  return (
    <div>
      <Header />
      <div className="container flex flex-col mx-auto justify-center">
        <h1 className="font-bold text-center">Vendre votre véhicule</h1>
        <Alert type="info" message="Page à venir..." />
      </div>
    </div>
  );
}
