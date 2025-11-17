export default function Hero() {
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
          <h1 className="mb-5 text-5xl font-bold">Trouvez la voiture qui vous correspond</h1>
          <p className="mb-5">La liberté commence au moment où vous tournez la clé</p>
          <button className="btn btn-primary rounded-4xl ">C'est parti</button>
        </div>
      </div>
    </div>
  );
}
