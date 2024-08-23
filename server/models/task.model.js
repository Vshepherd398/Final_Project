import { model, Schema } from "mongoose";

const TaskSchema = new Schema(
  {
    taskTitle: {
      type: String,
      required: [true, "Opps, you forgot to name your task!"],
      minlength: [2, "I think you want more than 2 letters to name this task..."],
      maxlength: [150, "Whoa slow down! That's a really long name... Try to keep it under 150 characters."],
    },
    timeToComplete: {
      type: Number,
      required: [true, "Wait how long will this take!?"],
      minlength: [1, "I don't think you can do this task instantly... Give yourself at least 1 min."],
    },
    description: {
      type: String,
      required: [true, "It might be helpful to explain what this task entails."],
      minlength: [5, "The description must be at least 5 characters long."],
      maxlength: [250, "The Description must not be longer than 250 characters."]
    },
    taskCompleted: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Task = model("Task", TaskSchema);

export default Task;