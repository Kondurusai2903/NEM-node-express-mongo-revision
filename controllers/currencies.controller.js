const currencyJson = require('../currencies.json')

const getCurrencies = (req, res) => {
  const { min_value } = req.query
  console.log(min_value)
  res
    .header({
      'Content-type': 'application/json',
    })
    .send(currencyJson.data.filter((currency) => currency.min_size >= min_value))
}

const getCurrenciesBySymbol = (req, res) => {
  console.log(req.params)
  const { currency } = req.params

  const currenobj = currencyJson.data.find((curr) => curr.id.toLowerCase() === currency.toLowerCase())
  if (currenobj) res.status(200).send(currenobj)
  else {
    res.status(400).send({ message: 'INVALID Currency' })
  }
}

module.exports = {
  getCurrencies,
  getCurrenciesBySymbol,
}
