import Rating from "../../UI/Rating";

interface TestimonialType {
  rate: number;
  comment: string;
  author: string;
  date: string;
}

export default function Testimonial({ rate, comment, author, date }: TestimonialType) {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <Rating rate={rate} />
        <p>{comment}</p>
        <div className="card-actions justify-end mt-4">
          <div className="text-sm">
            <p className="font-semibold">{author}</p>
            <p className="text-gray-500">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
