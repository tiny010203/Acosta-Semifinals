// controllers/itemController.js
const task = require("../models/taskModel");

// Get all task
const getAlltask = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "task retrieved successfully", data: task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Get a specific task by ID
const gettaskById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const task= task.find((task) => task.id === id);
    if (task) {
      res
        .status(200)
        .json({ message: "task retrieved successfully", data: task });
    } else {
      res.status(404).json({ message: "task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Add a new task
const addtask = async (req, res) => {
  try {
    const newTask = req.body;
    task.push(newTask);
    res.status(201).json({ message: "task added successfully", data: task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Update an existing task
const updatetask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = task.findIndex((task) => task.id === id);
    if (index !== -1) {
      task[index] = { ...task[index], ...req.body };
      res
        .status(200)
        .json({ message: "task updated successfully", data: task });
    } else {
      res.status(404).json({ message: "task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Delete an task
const deletetask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = task.findIndex((task) => task.id === id);
    if (index !== -1) {
      task.splice(index, 1);
      res
        .status(200)
        .json({ message: "task deleted successfully", data: task });
    } else {
      res.status(404).json({ message: "task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getAlltask,
  addtask,
  updatetask,
  deletetask,
};