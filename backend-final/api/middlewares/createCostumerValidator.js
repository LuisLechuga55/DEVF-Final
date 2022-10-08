import joi from 'joi';

const costumerSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  birthday: joi.date().required(),
  phone: joi.string(),
  email: joi.string().required(),
  password: joi.string().required(),
  role: joi.string()
});

export default async (req, res, next) => {
  try {
    await costumerSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};
