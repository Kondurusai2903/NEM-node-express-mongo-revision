const express = require('express')

const userRouter = express.Router()
const { getAllUsers, getUserByUuid, getUserByGenderAndName } = require('../controllers/user.controller')
const veriryAuth = require('../middlewares/verifyAuth')
const { getQueryErrors, userSearchValidator, schema } = require('../validators/UserSearchValidations')

const validator = require('../middlewares/validator')
const UuidValidator = require('../validators/Uuid.Validator')
userRouter.use(veriryAuth)
userRouter.get('/', getAllUsers)

userRouter.get('/search', validator(schema), getUserByGenderAndName)

userRouter.get('/:uuid', UuidValidator, getUserByUuid)

module.exports = userRouter
