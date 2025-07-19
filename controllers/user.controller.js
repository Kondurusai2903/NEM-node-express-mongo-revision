const userJson = require('../user.json')

const getAllUsers = (req, res) => {
  res
    .header({
      'Content-type': 'application/json',
    })
    .send(userJson)
}
const getUserByUuid = (req, res) => {
  const { uuid } = req.params
  const user = userJson.data.find((user) => user.login.uuid === uuid)
  if (user) res.status(200).header({ 'Content-type': 'application/json' }).send(user)
  res.status(400).send({
    message: 'No User Found',
  })
}
const getUserByGenderAndName = (req, res) => {
  const { gender, age } = req.query
  console.log(gender, age)
  const valid = ['male', 'female']
  if (!gender && !age) {
    res.status(400).send({
      message: 'Atleast One is required Gender or Age',
    })
  } else if (!gender || !valid.includes(gender)) {
    res.status(400).send({
      message: 'Gender not Found',
    })
  } else if (!age || isNaN(age)) {
    res.status(400).send({
      message: 'Age is Not Valid',
    })
  }

  if (age && gender) {
    const user = userJson.data.find((user) => user.gender === gender && Number(user.dob.age) === Number(age))
    res
      .header({
        'Content-Type': 'application/json',
      })
      .status(200)
      .send(user)
  } else if (age) {
    const user = userJson.data.find((user) => Number(user.dob.age) === Number(age))
    res

      .header({
        'Content-Type': 'application/json',
      })
      .status(200)
      .send(user)
  } else if (gender) {
    const user = userJson.data.find((user) => user.gender === gender)
    res

      .header({
        'Content-Type': 'application/json',
      })
      .status(200)
      .send(user)
  } else {
    res.status(400).send({
      message: 'Invalid',
    })
  }
}

module.exports = { getAllUsers, getUserByUuid, getUserByGenderAndName }
