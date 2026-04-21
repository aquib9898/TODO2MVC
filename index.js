const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

const todoRoutes = require("./routes/todoRoutes");

app.use("/", todoRoutes);
//listen
app.listen(port, () => {
  console.log(`running on http://localhost:${port}`);
});
   