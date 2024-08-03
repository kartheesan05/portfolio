import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import ProjectDetail from "./components/project/ProjectDetail";

const router = createBrowserRouter([{ path: "/", element: <Home /> }, {
path: '/yelpcamp', element: <ProjectDetail/>
}]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
