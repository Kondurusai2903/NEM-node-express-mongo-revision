const { celebrate, Joi, Segments } = require('celebrate')
const brands = ['apple', 'samsung']
const categories = ['smartphone', 'tablet', 'pc']
const productSchema = Joi.object({
  brand: Joi.string().valid(...brands),
  category: Joi.string().valid(...categories),
}).or('brand', 'category')

const productSchemaValidator = celebrate({
  [Segments.QUERY]: Joi.object({
    brand: Joi.string().valid(...brands),
    category: Joi.string().valid(...categories),
  }).or('brand', 'category'),
})

module.exports = { productSchema, productSchemaValidator }
