import { createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

function App() {
  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
