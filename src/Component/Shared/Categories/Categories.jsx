import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
    const allCategories = useLoaderData();
    const categories = allCategories.data.news_category;
    return (
        <div className='flex flex-wrap justify-center items-center gap-1 my-5 px-1'>
            {
                categories.map((category, i) => 
                    <Category
                        key={i}    
                        category={category}
                    />
                )
            }
        </div>
    );
};

export default Categories;