import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"

const Navbar = () => {
    const {user, createLogOut} = useContext(AuthContext)
    console.log(user)
    const links = <>
        <li className="mx-1"><NavLink className={({ isActive }) => isActive ? 'bg-transparent' : 'focus:outline-none'} to='/'>Home</NavLink></li>
        <li className="mx-1"><NavLink className='focus:outline-none active:bg-transparent' to='/about'>About</NavLink></li>
        <li className="mx-1"><NavLink className='focus:outline-none active:bg-transparent' to='/career'>Career</NavLink></li>
    </>
    return (
        <div className="navbar  mt-1">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="">{user && user.email}</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <Link to='/profile' className="w-10 h-10">
                    <img src="https://img.icons8.com/?size=50&id=7819&format=png" alt="" />
                </Link>
                {
                    user ? <Link onClick={createLogOut} className=" bg-black py-2 px-8 font-semibold text-white">Log-Out</Link> : <Link to='/auth/login' className=" bg-black py-2 px-8 font-semibold text-white">Login</Link>
                }
                
            </div>
        </div>
    )
}

export default Navbar
