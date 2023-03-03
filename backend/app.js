const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo-router");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRouter);

module.exports = app;
