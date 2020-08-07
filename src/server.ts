import express from "express";
import routes from "./routes";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação

// env.PORT || 5000
app.listen(3333);


