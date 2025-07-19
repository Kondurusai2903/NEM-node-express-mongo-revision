const express = require('express')

const userRouter = express.Router()
const { getAllUsers, getUserByUuid, getUserByGenderAndName } = require('../controllers/user.controller')

userRouter.get('/', getAllUsers)

userRouter.get('/search', getUserByGenderAndName)

userRouter.get('/:uuid', getUserByUuid)

module.exports = userRouter
