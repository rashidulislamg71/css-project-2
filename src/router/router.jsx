import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from "../Pages/Home/Home";


const routers = createBrowserRouter([
        {
            element: <App />,
            children: [
                {
                    path : "/",
                    element: <Home />
                }
            ]
        }
]);

export default routers;