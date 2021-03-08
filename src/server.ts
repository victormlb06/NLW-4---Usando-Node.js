import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send("Hello World");
});

app.post("/a", (request, response) => {
  return response.json("Os dados foram salvos com sucesso");
});

app.listen(3200, () => console.log("The server is running"));
