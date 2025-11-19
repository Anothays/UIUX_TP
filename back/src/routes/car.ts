import { Hono } from 'hono';
import { car } from '../model/model.js';
export const carRouter = new Hono()

carRouter.get("/cars", async (c) => {
    try {
        const params = c.req.query();

        const query: any = {};

        // ----- Filtres textuels (search inclusif) -----
        const textFields = [
            "marque",
            "modele",
            "état",
            "couleur",
            "carburant",
            "boite"
        ];

        for (const field of textFields) {
            const value = params[field];
            if (value) {
                query[field] = { $regex: value, $options: "i" }; // i = ignore case
            }
        }

        // ----- Filtres numériques MIN/MAX -----
        const rangeFields = [
            { paramMin: "anneeMin", paramMax: "anneeMax", field: "annee" },
            { paramMin: "prixMin", paramMax: "prixMax", field: "prix" },
            { paramMin: "kilometrageMin", paramMax: "kilometrageMax", field: "kilometrage" },
            { paramMin: "puissanceMin", paramMax: "puissanceMax", field: "puissance" },
        ];

        for (const r of rangeFields) {
            const min = params[r.paramMin];
            const max = params[r.paramMax];

            if (min || max) {
                query[r.field] = {};
                if (min) query[r.field].$gte = Number(min);
                if (max) query[r.field].$lte = Number(max);
            }
        }

        // ----- Filtres numériques exacts -----
        if (params.portes) query.portes = Number(params.portes);
        if (params.places) query.places = Number(params.places);


        const cars = await car.find(query);
        return c.json({ message: "List of cars", cars });
    } catch (error) {
        console.log("Error fetching cars:", error);
        return c.json({ message: "Error fetching cars", error }, 500);
    }
});

carRouter.post("/cars/:id", async (c) => {
    const { id } = c.req.param();
    let carDetails;
    try {
        carDetails = await car.findOne({ id });
    } catch (error) {
        return c.json({ message: "Error fetching car details", error }, 500);
    }


    return c.json({ message: `Details of car with id: ${id}`, data: carDetails });
});
