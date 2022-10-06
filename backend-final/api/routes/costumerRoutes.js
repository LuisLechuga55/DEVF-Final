import express from 'express';
import { costumerController } from '../controllers/index.js';
import { createCostumerValidator, loginCostumerValidator } from '../middlewares/index.js';

const router = express();

router
  .route('/register')
  .post(createCostumerValidator, costumerController.registerCostumer);

router
  .route('/login')
  .post(loginCostumerValidator, costumerController.loginCostumer);

router
  .route('/')
  .get(costumerController.getAllCostumer);

router
  .route('/:id')
  .get(costumerController.getOneCostumer)
  .patch(costumerController.updateCostumer)
  .delete(costumerController.deleteCostumer);

export default router;
