import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/tasks/${id}`)
      .then((response) => setTask(response.data))
      .catch ((error) => console.log(error));
      }, [id]);

  const handleCompletion = () => {
    axios
      .delete(`http://localhost:8000/api/tasks/${id}`)
      .then(() => navigate("/catalog"))
      .catch ((error) => console.log(error));
  };

  return task ? (
    <div className="task-details">
      <h1>{task.taskTitle}</h1>
      <p>Estimated Time to Complete: {task.timeToComplete} minutes</p>
      <p>Task Description: {task.description}</p>
      <p>Do you want to Complete: {task.taskTitle}</p>
      {task.taskCompleted && (
        <button onClick={handleCompletion} className="delete-button">
          Complete Task
        </button>
      )}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default TaskDetails;
