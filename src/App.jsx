import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home/home";
import { ErrorPage } from "./pages/erroPage";
import { Loguin } from "./pages/loguin";
import { ToDoList } from "./components/toDoList";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/todo",
      element: <ToDoList />,
    },
    {
      path: "/loguin",
      element: <Loguin />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
