
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SingleNews = ({singleNews}) => {
    const {title, author, image_url, details, total_view, _id} = singleNews;
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/newsDetails/${_id}`)
    }
    return (
        <div className='card border'>
            <figure className="h-fit bg-gray-200"><img src={image_url} alt="news" className="w-fit"/></figure>
                <div className="card-body p-2 flex flex-col">
                  <h2 className="card-title text-lg">
                    {title?.slice(0,25)}...</h2>
                  <span className='text-[13px] flex-grow'>{details?.slice(0,100)}</span>
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
                    <button onClick={handleClick} className="btn btn-primary">Details</button>
                  </div>
                </div>
        </div>
    );
};

SingleNews.propTypes = {
    singleNews : PropTypes.object,
};

export default SingleNews;