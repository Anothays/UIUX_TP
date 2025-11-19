import mongoose, { set } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbHost = 'localhost';
const dbPort = 27017;
const dbName = 'uiux';
const dbUser = process.env.MONGO_INITDB_ROOT_USERNAME || '';
const dbPassword = process.env.MONGO_INITDB_ROOT_PASSWORD || '';
const dbURI = `mongodb://${dbHost}:${dbPort}/${dbName}`;

const db = mongoose.createConnection(dbURI, {
    user: dbUser,
    pass: dbPassword,
})
db.useDb(dbName);


const carSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    marque: { type: String, required: true, trim: true },
    modele: { type: String, required: true, trim: true },
    annee: { type: Number, required: true, min: 1886 },
    prix: { type: Number, required: true, min: 1000 },
    couleur: { type: String, required: true, trim: true },
    kilometrage: { type: Number, required: true, default: 0, min: 0 },
    carburant: { type: String, required: true, trim: true },
    puissance: { type: Number, required: true, min: 0 },
    boite: { type: String, required: true, trim: true },
    portes: { type: Number, required:true, min: 0 },
    places: { type: Number, required:true, min: 0 },
    description: { type: String, required: true, trim: true },
    tags: { type: [String], default: [], required: true },
    état: { type: String, enum: ["occasion", "neuve"], required: true },
    image: { type: String, required: true, trim: true },
}, { timestamps: true });

const car = db.model("car", carSchema, "car");
const dbCar = db.collections["cars"];

export { car, dbCar };