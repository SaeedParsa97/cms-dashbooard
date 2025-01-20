import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

function App() {
  let router = useRoutes(routes);

  return (
    <div className="m-0">
      <TopBar />
      <div className="flex mt-[10px]">
        <SideBar />
        {router}
      </div>
    </div>
  );
}

export default App;
