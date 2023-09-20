import { useLoaderData, useNavigate } from "react-router-dom";


const NewsDetails = () => {
    const allNews = useLoaderData()
    const news = allNews.data[0]
    console.log(news);
    const {title, author, image_url, details, total_view} = news;
    const navigate = useNavigate()
    const handleCLick = () => {
        navigate(-1)
    }

    return (
        <div className="p-5 my-10 sm:px-[20%] md:px-[25%] lg:px-[30%] xl:px-[35%]">
            <div className='card border'>
            <figure className="h-fit bg-gray-200"><img src={image_url} alt="news" className="w-fit"/></figure>
                <div className="card-body p-2 flex flex-col">
                  <h2 className="card-title text-lg">
                    {title}</h2>
                  <span className='text-[13px] flex-grow'>{details}</span>
                  <span>Total views: {total_view ? total_view : 'No view'}</span>
                  <hr/>
                  <div className="flex justify-between items-center gap-2">
                    <div className="flex-1 flex justify-start items-center gap-2">
                        <div className="w-10">    
                            <img src={author?.img} alt="" className="w-full rounded-full" />
                        </div>
                        <div className="flex-1">
                            <h1 className='text-sm font-light'>{author?.name}</h1>
                            <p className='text-xs'>{author?.published_date}</p>
                        </div>
                    </div>
                    <button onClick={handleCLick} className="btn btn-primary">Go Back</button>
                  </div>
                </div>
        </div>
        </div>
    );
};

export default NewsDetails;