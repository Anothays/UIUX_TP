import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../UI/Card";
import type { Car } from "@/model/CarsTypes";


export default function Store() {
    
    const car = {} as Car;


    return (
        <div>
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="flex justify-center max-w-48 mx-auto">
                        <Card key={index} car={car} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}