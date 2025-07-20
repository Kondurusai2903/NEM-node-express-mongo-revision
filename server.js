// require('dotenv').config({ quiet: true })
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })
const app = require('./index')

const PORT = process.env.PORT

console.log(app.get('env'))
// console.log(process.env)

app.listen(PORT, () => {
  console.log(`Server started at PORT :: ${PORT}`)
})
