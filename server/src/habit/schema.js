const Joi = require('joi');

const habitSchema = Joi.object({
  name: Joi.string().required(),
  unit: Joi.string().required(),
  value: Joi.number().required(),
  recurrence: Joi.object({
    type: Joi.string().required(),
    option: Joi.array().required(),
  }),
});

module.exports = habitSchema;
