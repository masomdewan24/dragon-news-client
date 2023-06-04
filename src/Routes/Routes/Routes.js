import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import Category from "../../pages/Category/Category";
import News from "../../pages/News/News";
import Login from "../../pages/Login/Login/Login";
import Registraton from "../../pages/Login/Registration/Registraton";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndCondations from "../../pages/TermsAndCondations/TermsAndCondations";

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
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registraton></Registraton>
            },
            {
                path: '/terms',
                element: <TermsAndCondations></TermsAndCondations>
            }
]    }
])