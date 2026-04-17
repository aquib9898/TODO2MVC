const express = require("express");
const router = express.Router();

const todoControllers = require("../controllers/todoControllers");

router.get("/", todoControllers.getHome);

router.post("/todo", todoControllers.setUser);

router.get("/todo", todoControllers.getTodoPage);

router.post("/add", todoControllers.addTodo);

router.post("/delete", todoControllers.deleteTodo);

module.exports = router;
