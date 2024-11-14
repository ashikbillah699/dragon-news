import { createBrowserRouter, Navigate } from 'react-router-dom'
import News from '../pages/news'
import Login from '../pages/Login'
import MainLayout from '../layouts/MainLayout'
import About from '../pages/About'
import Career from '../pages/Career'
import CategoryData from '../components/CategoryData'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Navigate to={'category/08'}></Navigate>

            },
            {
                path: '/category/:id',
                element: <CategoryData></CategoryData>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }

        ]
    },
    {
        path: '/news',
        element: <News></News>
    },
    {
        path: '/login',
        element: <Login></Login>
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
