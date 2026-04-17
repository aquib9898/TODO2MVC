let todos = [];

const getTodos = () => todos;

const addTodo = (task) => {
  if (task && task.trim() !== "") {
    todos.push(task);
  }
};

const deleteTodo = (index) => {
  todos.splice(index, 1);
};

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
};
