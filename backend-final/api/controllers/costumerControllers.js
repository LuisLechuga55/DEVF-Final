import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
import { Costumer } from '../models/index.js';
import config from '../config/index.js';

const registerCostumer = async (req, res) => {
  try {
    const encryptedPass = await bcrypt.hash(req.body.password, 10);
    req.body.password = encryptedPass;

    const newCostumer = await Costumer.create(req.body);
    newCostumer.password = undefined;

    console.log('Usuario registrado con exito');

    res.json({
      msg: 'Usuario registrado',
      data: newCostumer,
    });

  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

const loginCostumer = async (req, res) => {
  const { password, email } = req.body;
  try {
    const costumer = await Costumer.findOne({ email });
    if (!costumer) {
      return res.status(401).json({
        msg: 'Credenciales erroneas',
      });
    };

    const match = await bcrypt.compare(password, costumer.password);
    if (!match) {
      return res.status(401).json({
        msg: 'Credenciales erroneas',
      });
    };

    const payload = {
      costumerId: costumer.id,
    };

    const token = jwt.encode(payload, config.token.secret);

    console.log('Login correcto del Usuario');

    return res.json({
      msg: 'Login correcto',
      token,
    });

  } catch (error) {
    return res.status(500).json({
      msg: 'Error al hacer Login',
      data: error.message,
    });
  }
};

const getAllCostumer = async (req, res) => {
  try {
    const costumer = await Costumer.find({}, {password: 0, role: 0});

    console.log('Usuarios encontrados con exito');

    return res.json({
      msg: 'Usuarios encontrados',
      data: costumer,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al obtener Usuarios',
      data: error,
    });
  }
};

const getOneCostumer = async (req, res) => {
  try {
    const { id } = req.params;
    const costumer = await Costumer.findById(id);

    costumer.password = undefined;
    costumer.role = undefined;

    console.log('Usuario encontrado con exito');

    return res.json({
      msg: 'Usuario encontrado',
      data: costumer,
    });

  } catch (error) {
    return res.status(500).json({
      msg: 'Error al encontrar Usuario',
      data: error,
    });
  }
};

const updateCostumer = async (req, res) => {
  try {
    const { id } = req.params;
    const costumerUpdate = await Costumer.findByIdAndUpdate(id, req.body);

    costumerUpdate.password = undefined;

    console.log('Usuario actualizado con exito');

    return res.json({
      msg: 'Usuario actualizado',
      data: costumerUpdate,
    });
    
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar',
      data: error.message,
    });
  }
};

const deleteCostumer = async (req, res) => {
  try {
    const { id } = req.params;
    const costumerDelete = await Costumer.findByIdAndRemove(id);

    costumerDelete.password = undefined;

    console.log('Usuario borrado con exito');

    return res.json({
      msg: 'Usuario borrado',
      data: costumerDelete,
    });

  } catch (error) {
    return res.status(500).json({
      msg: 'Error al borrar Usuario',
      data: error,
    });
  }
};

export {
  registerCostumer,
  loginCostumer,
  getAllCostumer,
  getOneCostumer,
  updateCostumer,
  deleteCostumer,
};
