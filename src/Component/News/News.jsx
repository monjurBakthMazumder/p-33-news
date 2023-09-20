import { useLoaderData } from "react-router-dom";
import SingleNews from "./SingleNews";


const News = () => {
    const allNews = useLoaderData();
    const news = allNews.data
    return (
        <div className="px-5 sm:px-[10%]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium underline text-center">Total News: {news.length}</h1>
                {
                    news.length !==0
                    ?
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
                    {
                        news.map((singleNews,i)=> 
                            <SingleNews
                                key={i}
                                singleNews={singleNews}
                            />
                        )
                    }
                </div>
                        :
                        <div className="flex w-full justify-center my-32 text-2xl md:text-4xl lg:text-6xl font-bold">
                            <h1>Not Found</h1>
                        </div>
                }
        </div>
    );
};

export default News;