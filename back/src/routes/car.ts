import { Hono } from 'hono'
import { car } from '../model/model.js';
export const carRouter = new Hono()

carRouter.get("/cars", async (c) => {
    let cars;
    try {
        cars = await car.find();
    } catch (error) {
        console.log("Error fetching cars:", error);
        return c.json({ message: "Error fetching cars", error }, 500);
    }

    return c.json({ message: "List of cars", cars });
});

carRouter.post("/cars/:id", async (c) => {
    const { id } = c.req.param();
    let carDetails;
    try {
        carDetails = await car.findOne({ id });
    } catch (error) {
        return c.json({ message: "Error fetching car details", error }, 500);
    }
     

    return c.json({ message: `Details of car with id: ${id}`, car: carDetails });
});
