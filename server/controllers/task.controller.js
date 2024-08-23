import Task from "../models/task.model.js";

async function addTask(req, res) {
  try {
    const newTask = await Task.create(req.body);
    res.json(newTask);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getAllTasks(req, res) {
  try {
    const allTasks = await Task.find();
    res.json(allTasks);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function getOneTask(req, res) {
  try {
    const foundTask = await Task.findById(req.params.id);
    res.json(foundTask);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function updateTask(req, res) {
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.json(updatedTask);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deleteTask(req, res) {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.json(deletedTask);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export { addTask, getAllTasks, getOneTask, updateTask, deleteTask };