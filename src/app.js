const express = require("express");

const app = express();

const { PORT = 3005, API_URL = "http://127.0.0.1" } = process.env;

app.get("/", (request, response) => {
  response.status(200);
  response.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
