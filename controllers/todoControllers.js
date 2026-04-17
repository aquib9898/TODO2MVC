const userModels = require("../models/usermodels");
const todoModels = require("../models/todomodels");

const getHome = (req, res) => {
  res.render("index", { data: "some-data" });
};

const setUser = (req, res) => {
  userModels.setUser({
    firstname: req.body.name1,
    secondname: req.body.surname,
  });
  res.redirect("/todo");
};

const getTodoPage = (req, res) => {
  const { firstname, secondname } = userModels.getUser();
  const todos = todoModels.getTodos();

  res.render("todo", { firstname, secondname, todos });
};

const addTodo = (req, res) => {
  todoModels.addTodo(req.body.task);
  res.redirect("/todo");
};

const deleteTodo = (req, res) => {
  todoModels.deleteTodo(req.body.index);
  res.redirect("/todo");
};

module.exports = {
  getHome,
  setUser,
  getTodoPage,
  addTodo,
  deleteTodo,
};
