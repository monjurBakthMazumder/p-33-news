import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <div className="lg:flex">
            <div className="drawer lg:drawer-open lg:w-80 z-50">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex">
                    {/* Page content here */}
                    <label  htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden flex justify-end w-full pr-8 sm:pr-[10%] md:pr-[12%]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to={`/dashboard/dashboard`}>Dashboard</NavLink></li>
                    <li><NavLink to={`/dashboard/profile`}>Profile</NavLink></li>
                    <li><NavLink to={`/dashboard/editProfile`}>EditProfile</NavLink></li>
                    <li><NavLink to={`/dashboard/about`}>About</NavLink></li>
                    <li><NavLink to={`/dashboard/contact`}>Contact</NavLink></li>
                    </ul>
                
                </div>
            </div>
            <div className="flex justify-center w-full font-bold" >
            <Outlet/>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Dashboard;