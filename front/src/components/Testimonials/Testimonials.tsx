import Testimonial from "./Tesimonial/Testimonial";

const data = [
  {
    rate: 5,
    comment: "Service impeccable, la voiture était comme neuve et le personnel très aimable !",
    author: "Marie Dupont",
    date: "2024-05-18",
  },
  {
    rate: 4,
    comment: "Bonne expérience, mais la procédure de location était un peu longue.",
    author: "Jean Martin",
    date: "2024-06-02",
  },
  {
    rate: 5,
    comment: "Rapide, facile et prix attractifs. Je recommande sans hésiter.",
    author: "Sophie Leroy",
    date: "2024-05-25",
  },
  {
    rate: 3,
    comment: "Voiture correcte mais le plein n'était pas fait à la remise.",
    author: "Pierre Lamoureux",
    date: "2024-04-30",
  },
  {
    rate: 4,
    comment: "Personnel très professionnel et arrangeant, merci encore !",
    author: "Isabelle Moreau",
    date: "2024-06-10",
  },
];

export default function Testimonials() {
  return (
    <>
      <h2 className="mb-5 text-3xl text-center font-bold pt-5">Ils nous ont fait confiance</h2>
      <div className="flex flex-row  gap-6 justify-center items-stretch">
        {data.map((testimonial, idx) => (
          <Testimonial key={idx} {...testimonial} />
        ))}
      </div>
    </>
  );
}
