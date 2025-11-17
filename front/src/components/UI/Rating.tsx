interface RatingProps {
  rate: number;
  maxRate?: number;
}

export default function Rating({ rate, maxRate = 5 }: RatingProps) {
  return (
    <div className="rating">
      {Array.from({ length: maxRate }, (_, index) => (
        <span
          key={index}
          className={`mask mask-star-2 ${index < rate ? "bg-orange-400" : "bg-gray-300"}`}
          aria-label={`${index + 1} star`}
        />
      ))}
    </div>
  );
}
