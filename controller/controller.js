import Questions from "../models/questions.js"
import Resultats from "../models/resultats.js";
import questions, {reponses} from "../database/data.js"


/*demander les questions*/

export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
};

/*inserer les questions */

export async function insertQuestions(req, res){
    try {
        const p = await Questions.insertMany( {questions, reponses});
        console.log(p);
        res.json({ msg: "Data Saved" })

    } catch (error) {
        console.trace(error);
        res.json({ error });
    }
}

/* supprimer les questions*/
export async function dropQuestions(req, res){
    try {
        const d = await Questions.deleteMany();
        res.json({msg: "Questions Supprimé !"})
    } catch (error) {
        res.json({error})
    }
}

/*demander les resultas */
export async function getResults(req, res){
    try {
        const r = await Resultats.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/*poster les resultats */

export async function storeResults(req, res){
    try {
        const {username, resultats, essais, points} = req.body;
        if (!username && !resultats) throw new Error('Les Données ne sont pas correctes !');
        const rc = await Resultats.create({username, resultats, essais, points})
            res.json({msg: "Resultats ok !"})

    } catch (error) {
        res.json({ error })
    }
}

/*sup les resulats */

export async function dropResults(req, res){
    try {
        const rc = await Resultats.deleteMany();
        res.json({msg : "Resultats Suprimé !"})
    } catch (error) {
        res.json({error})
    }
}