
import { FaArtstation } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Home</NavLink></li>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>All Art &craft Items</NavLink></li>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Add Craft Item</NavLink></li>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>My Art & Craft List</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                {/* <div className="flex items-start">
                    <FaArtstation  className="size-9"/>
                    <a className="btn btn-ghost text-xl">Art & Craft Store</a>
                </div> */}
                <Link to={'/'}>
                    <div className="flex flex-row">
                        <FaArtstation className="size-10"></FaArtstation>

                        <p className="btn btn-ghost text-xl "> <span className=" font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Art </span> <span className=" font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">& Craft Store</span></p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;