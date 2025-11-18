import Card from "./Card"

export default function SimilarProduct() {
    return (
        <div className="my-10 px-5">
            <h1 className="text-[25px] text-center">Produits similaires</h1>

            <div className="carousel w-full py-10">
                {Array(5).fill(0).map((_, index) => (
                    <div key={index} className="carousel-item w-1/6 px-5">
                        <Card key={index} car={null} />
                    </div>
                ))}
            </div>
        </div>
    )
}