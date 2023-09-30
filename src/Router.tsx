import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Components/Home";
import { TestForm } from "./Components/TestForm";
import { Error } from './pages/Error';

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                index: true
            }, 
            {
                path: "/test",
                element: <TestForm></TestForm>
            }

        ]
    }
]) 