// routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAlltask,
  addtask,
  updatetask,
  deletetask,
} = require("../controllers/taskController");

// Route definitions
router.get("/", getAlltask);
router.post("/", addtask);
router.put("/:id", updatetask);
router.delete("/:id", deletetask);

module.exports = router;