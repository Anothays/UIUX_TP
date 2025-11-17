import type { Car } from '@/model/CarsTypes';
import cars from '../../../../back/data/cars.json';
import Card from '../UI/Card';
export default function HomePage() {
    return (
        <div className='flex gap-10'>
            {/* <p>HelloWorld</p> */}
            <Card car={cars[0] as unknown as Car} />
            <Card car={cars[0] as unknown as Car} />
            <Card car={cars[0] as unknown as Car} />
            


        </div>
    );
}
