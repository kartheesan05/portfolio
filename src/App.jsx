import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./Home";
import ProjectDetail from "./components/project/ProjectDetail";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/yelpcamp", element: <ProjectDetail /> },
  { path: "/*", element: <Navigate to="/" replace /> }, // Catch-all route for redirection
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
