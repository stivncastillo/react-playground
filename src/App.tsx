import { Link } from "react-router-dom";

const App = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/concurrent">Concurrent Mode</Link>
        </li>
        <li>
          <Link to="/srcset">Srcset img</Link>
        </li>
      </ul>
    </nav>
  );
};

export default App;
