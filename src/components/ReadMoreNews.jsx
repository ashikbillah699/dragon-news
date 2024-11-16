/* eslint-disable react/prop-types */

import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";



const ReadMoreNews = ({ newsDetails }) => {
    // console.log(newsDetails)
    const {
        title,
        image_url,
        details,
        category_id
    } = newsDetails;

    return (
        <div className="bg-white border rounded p-5">
            <div className="">
                <div className="">
                    <img
                        src={image_url}
                        alt={title}
                        className="w-full h-[411px] object-cover rounded-lg"
                    />
                </div>
                <div className=" flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold my-5 leading-relaxed w-5/6 ]">{title}</h2>
                        <p className="text[#706F6F] leading-8 text-xm mb-3">{details}</p>
                    </div>
                    <div className="mt-4">
                        <Link to={`/category/${category_id}`} className="btn rounded-sm btn-outline text-white bg-[#D72050] w-2/6">
                            <FaArrowLeftLong></FaArrowLeftLong>
                            All news in this category
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadMoreNews;