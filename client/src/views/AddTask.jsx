import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTask = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    taskTitle: "",
    timeToComplete: "",
    description: "",
    errors: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      taskTitle: formData.taskTitle,
      timeToComplete: formData.timeToComplete,
      description: formData.description,
    };

  
      axios
        .post("http://localhost:8000/api/tasks", newTask)
        .then (() => navigate("/catalog"))
        .catch ((err) => 
          setFormData((prevData) => ({
          ...prevData,
          errors: err.response.data.errors,
        }))
      );
  };

  return (
    <div>
      <h1>Add a Task</h1>
      <form onSubmit={handleSubmit}>
        <label>Task Name:</label>
        {formData.errors.taskTitle && (
          <p style={{ color: "red" }}>{formData.errors.taskTitle.message}</p>
        )}
        <input
          type="text"
          name="taskTitle"
          value={formData.taskTitle}
          onChange={handleChange}
          required
        />
        <label>Time Needed To Complete Task:</label>
        {formData.errors.timeToComplete && (
          <p style={{ color: "red" }}>{formData.errors.timeToComplete.message}</p>
        )}
        <input
          type="number"
          name="timeToComplete"
          value={formData.timeToComplete}
          onChange={handleChange}
          min="1"
          required
        />
        <label>Describe your Task:</label>
        {formData.errors.description && (
          <p style={{ color: "red" }}>{formData.errors.description.message}</p>
        )}
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
