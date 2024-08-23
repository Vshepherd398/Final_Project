import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Time Needed to Complete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.taskTitle}</td>
              <td>{task.timeToComplete} min</td>
              <td>
                <Link to={`/tasks/${task._id}/details`}>
                  <button>Task Details</button>
                </Link>
                <Link to={`/tasks/${task._id}/update`}>
                  <button className="edit-button">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
