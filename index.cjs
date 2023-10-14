const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3333;

const axiosProxy = axios.create({
  baseURL: "https://wswork.com.br/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

app.use("/:param", async (req, res) => {
  const param = req.params.param;

  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const response = await axiosProxy.get(param);
    const data = response.data;
    const dataWithoutError = data.replace(/("[^"]+")\s*:\s*(\d+(\.\d+)?|"[^"]*")\s*("[^"]+")\s*:/g, '$1: $2, $3:')
    // const jsonData = JSON.parse(dataWithoutError)


    res.send(dataWithoutError);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro na solicitação à API.");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy rodando na porta ${PORT}`);
});
