const express = require('express')
const app = express()
PORT = 3000
// const { getCurrencies, getCurrenciesBySymbol } = require('./controllers/currencies.controller')
const currencyRouter = require('./routers/currencies.routes')
const userRouter = require('./routers/user.routes')

app.get('/', (req, res) => {
  res
    .header({
      'Content-type': 'text/html',
    })
    .send(`<h1>Currency Database </h1>`)
})

app.use('/currencies', currencyRouter)

app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server started at PORT :: ${PORT}`)
})

// app.get('/currencies', getCurrencies)
// app.get('/currencies/:currency', getCurrenciesBySymbol)
// app.get('/users', getAllUsers)
// app.get('/users/search', getUserByGenderAndName)
// app.get('/users/:uuid', getUserByUuid)

// /users → Returns all the user data
// /users/:uuid → Returns the user object by finding the user based on login.uuid
// /users/search?gender=<string>&age=<number>

// const express = require('express')
// const currenciesJson = require('./currencies.json')
// const app = express()
// const PORT = 3000

// app.get('/', (req, res) => {
//   res.send('hello NodeJS')
// })

// app.get('/currencies', (req, res) => {
//   res.send(JSON.stringify(currenciesJson))
// })

// app.listen(PORT, () => {
//   console.log(`server started PORT at ${PORT}`)
// })

// const { getAllCurrencies } = require('./controllers/currencies')
// // console.log("server.js file is started...");
// const currenciesJson = require("./currencies.json");
// // const { json } = require("express");
// const express = require('express')

// const http = require("http");
// const PORT = 3000;
// const server = http.createServer((req, res) => {
//   if (req.url === "/currencies") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(currenciesJson));
//     res.end();
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.write("<h1>Hello from Server...</h1>");
//     res.end();
//   }
//   //   res.writeHead(200, { "Content-Type": "application/json" });
//   //   const serverInfo = {
//   //     serverName: "Crio Server",
//   //     version: "1.0.0",
//   //     currentDate: new Date().toDateString(),
//   //     currentTime: new Date().toTimeString(),
//   //   };
//   //   res.write(JSON.stringify(serverInfo));
//   //   console.log("server started running...");
//   //   res.end();
// });

// server.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
// });

// const http = require('http')

// const PORT = 3000

// const server = http.createServer((req, res) => {
//   if (req.url === '/currencies') {
//     res.writeHead(200, { 'Content-type': 'application-json' })
//     res.write(JSON.stringify(currenciesJson))
//     res.end()
//   } else {
//     res.writeHead(404, { 'Content-type': 'text/plain' })
//     res.write(`<h1>Hello from Server </h1>`)
//     res.end()
//   }
// })
// server.listen(PORT, () => {
//   console.log(`server started at PORT :: ${PORT}`)
// })
