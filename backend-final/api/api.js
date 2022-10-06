import express from 'express';
import cors from 'cors';
import { costumerRoutes, productRoutes } from './routes/index.js';

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use(cors());

api.get('/api', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use('/ecommerce/costumer', costumerRoutes);

api.use('/ecommerce/product', productRoutes);


export default api;
