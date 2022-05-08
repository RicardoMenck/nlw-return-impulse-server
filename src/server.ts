import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Metodos HTTP: GET, POST, PUT, PATCH, DELETE
// GET = BUSCAR FINROMAÇÕES DO BACKEND
// POST = CADASTRAR INFORMAÇÕES
// PUT = ATUALZIAR INFORMAÇÕES DE UMA ENTIDADE
// PATCH = ATUALIZAR UMA INFORMAÇÃO UNICA DE UMA ENTIDADE
// DELETE = DELETAR UMA INFORMAÇÃO

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server running!");
});
