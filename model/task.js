import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    task: String,
    description: String,
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
