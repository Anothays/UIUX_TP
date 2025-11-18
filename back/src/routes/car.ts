import { Hono } from 'hono'
import { car } from '../model/model.js';
export const carRouter = new Hono()

carRouter.get("/cars", async (c) => {
    let cars;
    try {
        const params = c.req.query();
        cars = await car.find();
        cars = cars.filter((car) => {
            // Texte exact
            if (params.marque && !car.marque.includes(params.marque)) return false;
            if (params.modele && !car.modele.includes(params.modele)) return false;
            if (params.état && car.état !== params.état) return false;
            if (params.couleur && !car.couleur.includes(params.couleur)) return false;
            if (params.carburant && !car.carburant.includes(params.carburant)) return false;
            if (params.boite && !car.boite.includes(params.boite)) return false;

            // Valeurs numériques (min/max)
            if (params.anneeMin && car.annee < Number(params.anneeMin)) return false;
            if (params.anneeMax && car.annee > Number(params.anneeMax)) return false;

            if (params.prixMin && car.prix < Number(params.prixMin)) return false;
            if (params.prixMax && car.prix > Number(params.prixMax)) return false;

            if (params.kilometrageMin && car.kilometrage < Number(params.kilometrageMin)) return false;
            if (params.kilometrageMax && car.kilometrage > Number(params.kilometrageMax)) return false;

            if (params.puissanceMin && car.puissance < Number(params.puissanceMin)) return false;
            if (params.puissanceMax && car.puissance > Number(params.puissanceMax)) return false;

            // Valeurs exactes numériques
            if (params.portes && car.portes !== Number(params.portes)) return false;
            if (params.places && car.places !== Number(params.places)) return false;

            // Si on arrive ici → l’item passe le filtre
            return true;
        });




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
