import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
import { Outlet } from 'react-router-dom';
import Categories from '../Shared/Categories/Categories'
const Home = () => {
    return (
        <div>
            <Header/>
            <Categories/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;