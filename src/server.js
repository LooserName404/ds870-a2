const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.SYSTEM_PORT || 3000;

app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
