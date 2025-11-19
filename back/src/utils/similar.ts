import type { Car } from "../../../front/src/model/CarsTypes.js";
function similariteVoiture(v1: Car, v2: Car): number {
    const poids = {
        marque: 7,
        modele: 7,
        prix: 17,
        couleur: 3,
        kilometrage: 6,
        carburant: 4,
        puissance: 5,
        boite: 7,
        portes: 3,
        places: 3,
        tags: 4,
        état: 5
    };

    let score = 0;

    // Texte exact ou similaire
    const texteSimilaire = (a: string, b: string) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a === b ? 1 : (a.includes(b) || b.includes(a) ? 0.5 : 0);
    };

    // Pour les valeurs numériques : on calcule la proximité
    const ratioProximite = (a: number, b: number) => {
        const diff = Math.abs(a - b);
        return Math.max(0, 1 - diff / Math.max(a, b));
    };

    for (const cle in poids) {
        if (!(cle in v1) || !(cle in v2)) continue;

        const p = poids[cle as keyof typeof poids];
        const key = cle as keyof Car;
        const a: any = v1[key];
        const b: any = v2[key];

        if (["marque", "modele", "couleur", "carburant", "boite", "état"].includes(cle)) {
            score += p * texteSimilaire(String(a ?? ""), String(b ?? ""));
        }

        else if (["annee", "prix", "kilometrage", "puissance"].includes(cle)) {
            const na = Number(a ?? 0);
            const nb = Number(b ?? 0);
            // avoid division by zero and non-numeric values
            if (isFinite(na) && isFinite(nb) && Math.max(na, nb) > 0) {
                score += p * ratioProximite(na, nb);
            }
        }

        else if (["portes", "places"].includes(cle)) {
            score += a === b ? p : 0;
        }

        else if (cle === "tags") {
            const tags1 = Array.isArray(a) ? a : [];
            const tags2 = Array.isArray(b) ? b : [];
            const inter = tags1.filter((t: any) => tags2.includes(t)).length;
            const union = new Set([...tags1, ...tags2]).size;
            const ratio = union === 0 ? 0 : inter / union;
            score += ratio * p;
        }
    }

    return score;
}

export function listSimilarCars(targetCar: Car, carList: Car[]): {_id: String, score: number}[] {
    return carList.map(car => ({
        _id: car._id,
        score: similariteVoiture(targetCar, car)
    }));
}
