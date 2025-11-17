import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  },
  {
    id: 2,
    image: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  },
];

export default function BestSells() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <>
      <h2 className="mb-5 text-3xl text-center font-bold pt-5">Nos meilleures ventes</h2>
      <div className="carousel w-full relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="carousel-item relative w-full shrink-0">
              <img src={slide.image} className="w-full object-cover" alt={`Slide ${slide.id}`} />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-8" : "bg-base-300"
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
