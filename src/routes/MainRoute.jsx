import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import MainLayout from '../layouts/MainLayout'
import About from '../pages/About'
import Career from '../pages/Career'
import CategoryData from '../components/CategoryData'
import AutrhLayout from '../layouts/AutrhLayout'
import SignUp from '../pages/SignUp'
import NewsDetails from '../pages/NewsDetails'
import PrivetRoute from './PrivetRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to={'category/08'}></Navigate>

            },
            {
                path: '/category/:id',
                element: <CategoryData></CategoryData>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }

        ]
    },
    {
        path: '/news/:id',
        element:<PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>,
        loader:({params}) =>
            fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)

    },
    {
        path: '/auth',
        element: <AutrhLayout></AutrhLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path:'/auth/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/career',
        element: <Career></Career>
    },
    {
        path: '*',
        element: <h1>error</h1>
    }
])

export default router
