import { Router } from "express";
import {
  addTask,
  getAllTasks,
  getOneTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = Router();

router.route("/tasks").get(getAllTasks).post(addTask);

router
  .route("/tasks/:id")
  .get(getOneTask)
  .put(updateTask)
  .delete(deleteTask);

export default router;