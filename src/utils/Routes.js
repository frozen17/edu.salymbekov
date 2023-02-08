import Missiya from "../components/missiya/Missiya";
import Home from "../pages/home/Home";
import NotFound from "../pages/notfound/NotFound";
import { HOME_ROUTE, MISSION_ROUTE} from "./Consts";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home/>
    },
    {
        path: NOT_FOUND,
        element: <NotFound/>
    },
    {
        path: MISSION_ROUTE,
        element: <Missiya/>
    }
]