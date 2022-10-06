import express from 'express';
import { productController } from '../controllers/index.js';

const router = express.Router();

router
  .route('/')
  .post(productController.createProduct)
  .get(productController.getAllProducts)
  .get(productController.getProductFilters);

router
  .route('/:id')
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;