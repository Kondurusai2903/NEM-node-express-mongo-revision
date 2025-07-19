const Joi = require('joi')

const validGenders = ['male', 'female']

const schema = Joi.object({
  gender: Joi.string().valid(...validGenders),
  age: Joi.number().min(0).max(100),
})

const getQueryErrors = ({ gender, age }) => schema.validate({ gender, age })

module.exports = getQueryErrors
