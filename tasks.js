
const express = require("express");
const c = require("../controllers/tasksController");
const router = express.Router();

router.get("/", c.getAllTasks);
router.post("/", c.createTask);
router.put("/:id", c.updateTask);
router.delete("/:id", c.deleteTask);

module.exports = router;
