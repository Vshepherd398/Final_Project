import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <h1>.~ Welcome To Task Master ~.</h1>
      <div className="header-buttons">
        <h3>Options: </h3>
        <button onClick={() => navigate("/catalog")}>Home</button>
        <button onClick={() => navigate("/create")}>Add A Task</button>
      </div>
    </header>
  );
};

export default Header;
