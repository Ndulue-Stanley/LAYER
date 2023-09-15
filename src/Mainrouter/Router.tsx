import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout';
import Homescreen from '../Pages/Homescreen'

export const Mainrouter = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
}])