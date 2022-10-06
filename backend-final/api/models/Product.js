import mongoose from 'mongoose';

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
    enum: ['Automotriz', 'Belleza', 'Cine y TV', 'Tecnologia', 'Hogar', 'Deportes', 'Videojuegos', 'Jugueteria'],
    required: true,
  },
  infoProduct: {
    type: String,
    required: true,
  },
},
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
