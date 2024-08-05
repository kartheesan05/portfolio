import { useNavigate } from "react-router-dom";
import './notfound.scss'

function NotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="notfound">
      <h1>404</h1>
      <h3>Not Found</h3>
      <button onClick={handleClick}>Go Back Home</button>
    </div>
  );
}

export default NotFound;
