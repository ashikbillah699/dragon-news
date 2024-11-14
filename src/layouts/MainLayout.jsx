import { Outlet } from 'react-router-dom'
import FindUs from '../components/FindUs'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import LeftNavbar from '../components/LeftNavbar'
import Navbar from '../components/Navbar'
import SocialLogin from '../components/SocialLogin'

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='grid md:grid-cols-12 gap-6'>
                <section className='col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </section>
                <section className='col-span-6'>
                    <h2 className="font-semibold mb-5">Dragon News Home</h2>
                    <Outlet></Outlet>
                </section>
                <section className='col-span-3'>
                    <h2 className="font-semibold mb-5">Login with</h2>
                    <SocialLogin></SocialLogin>
                    <FindUs></FindUs>
                </section>
            </main>
        </div>
    )
}

export default MainLayout
