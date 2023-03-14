import Missiya from "../components/missiya/Missiya";
import Development from "../pages/Development/Development";
import Founders from "../pages/Founders/founders";
import Home from "../pages/home/Home";
import Structure from "../pages/structure/Structure";
import Underfined from "../pages/underfined/Underfined";
import { HOME_ROUTE, MISSION_ROUTE, NOT_FOUND, HISTORY_ROUTE, FOUNDERS_ROUTE, DEVELOPMENT_ROUTE} from "./Consts";

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
    },
    {
        path: HISTORY_ROUTE,
        element: <History/>
    },
    {
        path: STRUCTURE_ROUTE,
        element: <Structure/>
    },
    {
        path: FOUNDERS_ROUTE,
        element: <Founders/>
    },
    {
        path: DEVELOPMENT_ROUTE,
        element: <Development/>
    },
]