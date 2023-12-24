import { Link } from "react-router-dom";
import { routes } from "./lib/routes";

const App = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <Link to={route.path}>{route.id}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default App;
