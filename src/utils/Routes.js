import Missiya from "../components/missiya/Missiya";
import Home from "../pages/home/Home";
import Underfined from "../pages/underfined/Underfined";
import { HOME_ROUTE, MISSION_ROUTE, NOT_FOUND} from "./Consts";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home/>
    },
    {
        path: NOT_FOUND,
        element: <Underfined/>
    },
    {
        path: MISSION_ROUTE,
        element: <Missiya/>
    }
]