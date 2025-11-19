import { useNavigate } from "react-router";

export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/discover");
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-max">
          <h1 className="mb-5 text-6xl font-bold">
            Trouvez la voiture{" "}
            <span className="text-rotate">
              <span>
                <span className="bg-teal-600"> qui vous correspond</span>
                <span className="bg-teal-600"> que vous aimez</span>
              </span>
            </span>
          </h1>
          <p className="mb-5 text-3xl">La liberté commence au moment où vous tournez la clé</p>
          <button className="btn btn-primary rounded-4xl border-2 border-b-2 p-6" onClick={handleClick}>
            C'est parti !
          </button>
        </div>
      </div>
    </div>
  );
}
