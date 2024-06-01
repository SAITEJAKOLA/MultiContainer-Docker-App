const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Todo = require('./models/todo');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  return res.status(200).json({
    todos,
  });
});

app.post('/todos', async (req, res) => {
  const name = req.body.name;
  const todo = new Todo({
    name,
  });
  await todo.save();
  res.status(201).json({ message: 'Goal saved', todo });
});

app.put('/todos/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  todo.completed = !todo.completed;

  await todo.save();

  return res.status(201).json({ message: 'Todos saved', todo });
});

app.delete('/todos/:id', async (req, res) => {
  await Todo.deleteOne({
    id: req.params.id,
  });

  return res.status(201).json({ message: 'Todo deleted' });
});

mongoose.connect(
  `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongodb:27017/todos-app?authSource=admin`,
  //host.docker.internal is used to fetch the host machine's IP address on
  // we can directly fetch the mongodb container IP address and
  //Using Docker Networks We can directly connect the two containers (mongodb://mongo:27017/todos-app)
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log('Unable to connect to MongoDB');
      console.log(err);
    } else {
      console.log('Connected to MongoDB');
      app.listen(8000, () => {
        console.log('Now listening on PORT 8000');
      });
    }
  }
);
