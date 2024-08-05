import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./Home";
import ProjectDetail from "./components/project/projectdetail/ProjectDetail";
import NotFound from './components/notfound/NotFound';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/yelpcamp", element: <ProjectDetail /> },
  { path: "/*", element: <NotFound/> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
