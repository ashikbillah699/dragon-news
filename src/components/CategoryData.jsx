
import { useLoaderData } from "react-router-dom";
import News from "../pages/news";


const CategoryData = () => {
    const {data:allNews} = useLoaderData()
    return (
        <div>
           {
            allNews.map((news, idx) =><News key={idx} news={news}></News>)
           }
        </div>
    );
};

export default CategoryData;