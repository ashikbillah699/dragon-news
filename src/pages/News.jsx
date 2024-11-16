/* eslint-disable react/prop-types */

import { FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


 
const News = ({ news }) => {
    return (
        <div className="card w-full bg-base-100 shadow-md mb-4">
            <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center space-x-3">
                    <img src={news.author.img} alt={news.author.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <h2 className="text-sm font-semibold">{news.author.name}</h2>
                        <p className="text-xs text-gray-500">{news.author.published_date}</p>
                    </div>
                </div>
                <FaShareAlt className="text-gray-500 cursor-pointer" />
            </div>
            <div className="px-4 pt-4">
                <h1 className="text-lg font-bold">{news.title}</h1>
            </div>
            <img src={news.image_url} alt={news.title} className="w-full h-48 object-cover rounded-lg mt-4 px-4" />
            <div className="px-4 pt-4">
                <p className="text-sm text-gray-600">{news.details}</p>
                <Link to={`/news/${news._id}`} className="text-orange-500 font-semibold mt-2">Read More</Link>
            </div>
            <div className="flex items-center justify-between px-4 py-4 border-t">
                <div className="flex items-center space-x-2">
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" checked readOnly />
                    </div>
                    <span className="text-sm font-semibold">{news.rating.number}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                    <FaEye />
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default News;