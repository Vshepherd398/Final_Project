import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    taskTitle: "",
    timeToComplete: "",
    description: "",
    errors: {},
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/tasks/${id}`)
      .then((res) => {
        setFormData({
          taskTitle: res.data.taskTitle,
          timeToComplete: res.data.timeToComplete,
          description: res.data.description,
          errors: {},
        });
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      taskTitle: formData.taskTitle,
      timeToComplete: formData.timeToComplete,
      description: formData.description,
    };

    axios
      .put(`http://localhost:8000/api/tasks/${id}`, updatedTask)
      .then(() => navigate("/catalog"))
      .catch ((err) => 
      setFormData((prevData) => ({
        ...prevData,
        errors: err.response.data.errors,
      }))
    );
  };

  return (
    <div>
      <h1>Update Task {formData.taskTitle}</h1>
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
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTask;
