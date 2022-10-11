import mongoose from 'mongoose';
import CostumerModel from './Costumer.js'

const productSchema = new mongoose.Schema({
  nameProduct: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['Automotriz', 'Belleza', 'Entretenimiento', 'Tecnologia', 'Hogar', 'Deportes', 'Videojuegos', 'Jugueteria'],
    required: true,
  },
  infoProduct: {
    type: String,
    required: true,
  },
  costumer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Costumer',
  }
},
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
