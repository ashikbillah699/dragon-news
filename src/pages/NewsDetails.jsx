import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import SocialLogin from "../components/SocialLogin";
import FindUs from "../components/FindUs";
import ReadMoreNews from "../components/ReadMoreNews";


const NewsDetails = () => {
    const { data } = useLoaderData()
    // console.log(data)
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
            <main className="grid md:grid-cols-12 gap-6">
                <div className="col-span-9">
                    {
                        data.map(newsDetails => <ReadMoreNews key={newsDetails._id} newsDetails={newsDetails}></ReadMoreNews>)
                    }
                </div>
                <section className='col-span-3'>
                    <h2 className="font-semibold mb-5">Login with</h2>
                    <SocialLogin></SocialLogin>
                    <FindUs></FindUs>
                </section>

            </main>
        </div>
    );
};

export default NewsDetails;