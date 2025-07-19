const express = require('express')

const currencyRouter = express.Router()
const { getCurrencies, getCurrenciesBySymbol } = require('../controllers/currencies.controller')

currencyRouter.get('/', getCurrencies)
currencyRouter.get('/:currency', getCurrenciesBySymbol)

module.exports = currencyRouter
