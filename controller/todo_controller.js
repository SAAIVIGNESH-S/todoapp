const Todo = require("../models/todo_model");

exports.addTodo = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;

  const todo = new Todo({
    title: title,
    description: description,
  });

  todo
    .save()
    .then((result) => {
      console.log("Added Todo");
      console.log(result);
      res.status(200).json({
        message: "Added Todo",
        title: title,
        description: description,
        result: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({ error: err });
    });
};

exports.getTodos = (req, res, next) => {
  Todo.find()
    .then((todos) => {
      console.log(todos);
      res.status(200).json({
        message: "Fetched Todo",
        todo: todos,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({ error: err });
    });
};

exports.updateTodo = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;

    Todo.updateOne({title: title}, {$set: {description: description}})
      .then((todo) => {
        console.log(todo);
        res.status(200).json({
          message: "Updated Todo",
          todo: todo,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(200).json({ error: err });
      });
};

exports.deleteTodo = (req, res, next) => {
    const title = req.body.title;

    Todo.deleteOne({title: title})
      .then((todo) => {
        console.log(todo);
        res.status(200).json({
          message: "Deleted Todo",
          todo: todo,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(200).json({ error: err });
      });
  };
