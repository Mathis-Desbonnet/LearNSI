import { Router } from "express";
const router = Router();
/*import constroller*/
import * as controller from '../controller/controller.js';

/*Questions Routes API*/
router.get('/questions', controller.getQuestions);
router.post('/questions', controller.insertQuestions);

router.route('/questions')
    .get(controller.getQuestions) /*get req */
    .post(controller.insertQuestions) /*post req*/
    .delete(controller.dropQuestions) /*sup ques */

router.route('/resultats')
    .get(controller.getResults) /*get res */
    .post(controller.storeResults)
    .delete(controller.dropResults)

export default router;