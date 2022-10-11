import { Product } from '../models/index.js';

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    console.log('Producto creado con exito');

    return res.json({
      msg: 'Producto creado',
      data: newProduct,
    });

  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear Producto',
      data: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productUpdate = await Product.findByIdAndUpdate(id, req.body);

    console.log('Producto actualizado con exito');

    return res.json({
      msg: 'Producto actualizado',
      data: productUpdate,
    });

  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar Producto',
      data: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productDelete = await Product.findByIdAndDelete(id);

    console.log('Producto eliminado con exito');

    return res.json({
      msg: 'Producto eliminado',
      data: productDelete,
    });

    
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al eliminar Producto',
      data: error.message,
    });
  }
};

const getProductFilters = async (req, res) => {
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;
  const category = req.query.category;
  const nameProduct = req.query.nameProduct;
  
  const prices = {
    price: { $gte : minPrice, $lte : maxPrice },
  };

  const filters = req.query;

  const filterObject = Object.assign({}, prices, category, nameProduct ,filters)

  try {
    const products = await Product.find(filterObject);

    console.log('Productos encontrados mediante filtros');

    return res.json({
      msg: 'Productos encontrados mediante filtros',
      data: products,
    });

  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los Productos',
      data: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();

    console.log('Productos encontrados con exito');

    return res.json({
      msg: 'Productos encontrados',
      data: product
    });

  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar los productos',
      data: error.message,
    });
  }
};

export {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductFilters,
  getAllProducts,
};
