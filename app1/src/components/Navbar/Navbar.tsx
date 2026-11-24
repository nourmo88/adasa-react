import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="navbar w-full px-8 bg-[#161616] shadow-sm fixed top-0 right-0 left-0 z-50">
                <div className="navbar-start">

                    <Link to="" className="cursor-pointer flex gap-4 items-center">
                        <div>
                            <i className="fa-solid fa-camera-retro text-amber-600 text-[30px]"></i>
                        </div>
                        <div>
                            <h3 className="text-[20px] font-bold">عدسة</h3>
                            <p className="text-[#ff8904cc] text-[12px]">عالم التصوير الفوتوغرافي</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 p-2 border border-[#262626] rounded-4xl">
                        <li><NavLink to="" className="text-gray-500 rounded-3xl hover:text-white transition-all duration-300">
                            الرئيسية
                        </NavLink></li>
                        <li><NavLink to="blog" className="text-gray-500 rounded-3xl hover:text-white transition-all duration-300">
                            المدونة
                        </NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="blog" className="btn bg-[#ef6210] border-0 rounded-3xl p-6 hidden lg:flex hover:-translate-y-1 transition-all duration-300">ابدأ القراءة</Link>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-[#161616] rounded-2xl z-50 mt-3 p-4 shadow fixed top-16 left-[5vw] w-[90vw] ">
                            <li><NavLink to="" className="text-gray-500 rounded-3xl p-4 my-1 hover:text-white transition-all duration-300">
                                الرئيسية
                            </NavLink></li>
                            <li><NavLink to="blog" className="text-gray-500 rounded-3xl p-4 my-1 hover:text-white transition-all duration-300">
                                المدونة
                            </NavLink></li>
                            <li>
                                <Link to="blog" className="btn bg-[#ef6210] border-0 rounded-3xl p-6 mt-5 mb-2 hover:-translate-y-1 transition-all duration-300" >
                                    ابدأ القراءة
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}
