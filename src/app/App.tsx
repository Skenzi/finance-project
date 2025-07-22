import { Outlet } from "react-router";
import NavBar from "../widgets/NavBar/NavBar";

const App = () => {
    return <div className="main-container">
        <NavBar />
        <Outlet />
    </div>
}

export default App;