import mongoose from "mongoose";
const {Schema} = mongoose;
/*model des questions */
const  modelquestion = new Schema({
    questions: { type: Array, default: []},
    reponses : { type: Array, default: []},
    CreeA : { type: Date, default: Date.now},
});

export default mongoose.model('Questions', modelquestion);