import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Dashboard";
import TasksList from "./views/TaskList";
import AddTask from "./views/AddTask";
import TaskDetails from "./views/TaskDetails";
import UpdateTask from "./views/EditTask";

const App = () => {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/catalog" />} />
        <Route path="/tasks/:id/update" element={<UpdateTask />} />
        <Route path="/catalog" element={<TasksList />} />
        <Route path="/tasks/:id/details" element={<TaskDetails />} />
        <Route path="/create" element={<AddTask />} />
      </Routes>
    </Router>
  );
};

export default App;
