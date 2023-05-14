import mongoose from "mongoose";
const {Schema} = mongoose;

/*resultat */
const modelresultats = new Schema({
    username: {type: String},
    resultats: {type: Array, default: []},
    essais: {type: Number, default: 0},
    points: {type: Number, default: 0},
    CreeA: {type: Date, default: Date.now},
})

export default mongoose.model('Resultats', modelresultats)