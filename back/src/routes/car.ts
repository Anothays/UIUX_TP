import { Hono } from 'hono';
import type { Car } from '../../../front/src/model/CarsTypes.js';
import { car } from '../model/model.js';
import { listSimilarCars } from '../utils/similar.js';
export const carRouter = new Hono()

carRouter.get("/cars", async (c) => {
    try {
        const params = c.req.query();
        sanitizeQueryParams(params);
        const { query, pagination } = handleRequestParams(params);
        const total = await car.countDocuments(query);
        const totalPages = Math.ceil(total / pagination.limit);

        const cars = await car.find(query)
            .skip((pagination.page - 1) * pagination.limit)
            .limit(pagination.limit);

        console.log('CARS --> ', cars.length);

        await new Promise(resolve => setTimeout(resolve, 2000));

        return c.json({
            message: "List of cars",
            data: cars,
            pagination: {
                currentPage: pagination.page,
                itemsPerPage: pagination.limit,
                totalPages: totalPages,
                totalItems: total,
            }
        });

    } catch (error) {
        console.log("Error fetching cars:", error);
        return c.json({ message: "Error fetching cars", error }, 500);
    }
});

carRouter.get("/cars/:id", async (c) => {
    const id = String(c.req.param('id'));
    let carDetails;
    try {
        carDetails = await car.findOne({ _id: id });
    } catch (error) {
        return c.json({ message: "Error fetching car details", error }, 500);
    }


    return c.json({ message: `Details of car with id: ${id}`, data: carDetails });
});

carRouter.get("/cars/:id/similar", async (c) => {
    const id = String(c.req.param('id'));
    const carDetails = await car.findOne({ _id: id });

    if (!carDetails) {
        return c.json({ message: "Car not found" }, 404);
    }

    let similarCars;
    try {
        const allCars = await car.find();
        const similarCarsIds = listSimilarCars(carDetails as unknown as Car, allCars as unknown as Car[])
            .sort((a, b) => b.score - a.score)
            .slice(0, 11)
            .map(item => String(item._id))
            .filter(id => id !== String(carDetails._id))


        similarCars = await car.find({ _id: { $in: similarCarsIds } });
    } catch (error) {
        return c.json({ message: "Error fetching similar cars", error }, 500);
    }

    return c.json({ message: `Similar cars to car with id: ${id}`, data: similarCars });
});

function sanitizeQueryParams(params: Record<string, string>) {
    Object.keys(params).forEach(key => {
        if (!params[key]) delete params[key];
    });
}

function handleRequestParams(params: Record<string, string>) {
    const query: any = {};

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

    const rangeFields = [
        { paramMin: "anneeMin", paramMax: "anneeMax", field: "annee" },
        { paramMin: "prixMin", paramMax: "prixMax", field: "prix" },
        { paramMin: "kilometrageMin", paramMax: "kilometrageMax", field: "kilometrage" },
        { paramMin: "puissanceMin", paramMax: "puissanceMax", field: "puissance" },
    ];

    for (const r of rangeFields) {
        const min = params[r.paramMin];
        const max = params[r.paramMax];

        if (min) {
            query[r.field] = {};
            if (min) query[r.field].$gte = Number(min);
        }
        if (max) {
            query[r.field] = {};
            if (max) query[r.field].$lte = Number(max);
        }
    }

    if (params.portes) query.portes = Number(params.portes);
    if (params.places) query.places = Number(params.places);

    // Gestion de la pagination
    const page = params.page ? Math.max(1, Number(params.page)) : 1;
    const limit = params.limit ? Math.max(1, Number(params.limit)) : 10;

    console.log('QUERY --> ', query);
    return {
        query,
        pagination: {
            page,
            limit
        }
    };
}


