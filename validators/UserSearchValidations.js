const { Segments, celebrate, Joi } = require('celebrate')

// const Joi = require('joi')

const validGenders = ['male', 'female']

const schema = Joi.object({
  gender: Joi.string().valid(...validGenders),
  age: Joi.number().min(0).max(100),
}).or('gender', 'age')

const userSearchValidator = celebrate({
  [Segments.QUERY]: Joi.object({
    gender: Joi.string().validate(...validGenders),
    age: Joi.number().min(0).max(100),
  }).or('gender', 'age'),
})
const getQueryErrors = ({ gender, age }) => schema.validate({ gender, age })

module.exports = { getQueryErrors, userSearchValidator, schema }
