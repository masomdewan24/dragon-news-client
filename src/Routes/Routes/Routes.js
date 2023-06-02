import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import Category from "../../pages/Category/Category";
import News from "../../pages/News/News";
import Login from "../../pages/Login/Login/Login";
import Registraton from "../../pages/Login/Registration/Registraton";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <News></News>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registraton></Registraton>
            }
]    }
])