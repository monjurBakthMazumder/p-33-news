import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Category.css'
const Category = ({category}) => {
    const {category_id, category_name} = category;
    return (
        <ul>
           <li> <NavLink to={`/news/${category_id}`} className="btn btn-xs sm:btn-sm">{category_name}</NavLink></li>
        </ul>
    );
};

Category.propTypes = {
    category :PropTypes.object
};

export default Category;