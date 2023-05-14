import mongoose from "mongoose";
import { config } from 'dotenv';

export default async function connect(){
    await mongoose.connect(process.env.ALTAS_URI);
    console.log("Connecté a la base de donné");
}