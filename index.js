// console.log("server.js file is started...");
const currenciesJson = require("./currencies.json");
const { json } = require("express");
const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/currencies") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(currenciesJson));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("<h1>Hello from Server...</h1>");
    res.end();
  }
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   const serverInfo = {
  //     serverName: "Crio Server",
  //     version: "1.0.0",
  //     currentDate: new Date().toDateString(),
  //     currentTime: new Date().toTimeString(),
  //   };
  //   res.write(JSON.stringify(serverInfo));
  //   console.log("server started running...");
  //   res.end();
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
