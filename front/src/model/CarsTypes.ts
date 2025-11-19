export type Car = {
    _id: string;
    id: string;
    marque: string;
    modele: string;
    annee: number;
    prix: number;
    couleur: string;
    kilometrage: number;
    carburant: string;
    puissance: number;
    boite: string;
    portes: number;
    places: number;
    description: string;
    tags: string[];
    image: string;
    état: "occasion" | "neuve";
}