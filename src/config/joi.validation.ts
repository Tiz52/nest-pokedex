import * as Joi from 'joi';

export const joiValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(3005),
  DEFAUL_LIMIT: Joi.number().default(6),
});
