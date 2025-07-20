const { celebrate, Joi, Segments } = require('celebrate')

const UuidValidator = celebrate({
  [Segments.PARAMS]: Joi.object({
    uuid: Joi.string().guid({
      version: ['uuidv4'],
    }),
  }),
})

module.exports = UuidValidator
