import { Route, Routes } from "react-router-dom"
import useRouteCustom from "./routes/useRouteCustom";


function App() {
  const routes = useRouteCustom();
  return routes;
}

export default App
