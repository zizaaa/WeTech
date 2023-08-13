import { Link, useLocation } from "react-router-dom"
import { RiMenu4Fill } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"
import { useState } from "react"

const Nav = () => {
    const location = useLocation();
    const [showNav, setShowNav] = useState(false)
  return (
    <nav>
        <div className="container mx-auto flex items-center justify-between py-7 md:px-0 px-10">
            {/* img container */}
            <Link to='/'>
                <h1 className="text-3xl text-darkBlue font-bold drop-shadow-md">
                    We
                    <span className="text-orange">Tech</span>
                </h1>
            </Link>
            {/* links */}
            <div className="lg:flex items-center gap-5 text-xl hidden">
                <Link to='/' className={`${location.pathname === '/' ? 'text-orange':''} hover:text-orange`}>Home</Link>
                <Link to='/Service' className={`${location.pathname === '/Service' ? 'text-orange':''} hover:text-orange`}>Service</Link>
                <Link to='/Projects' className={`${location.pathname === '/Projects' ? 'text-orange':''} hover:text-orange`}>Projects</Link>
                <Link to='/About' className={`${location.pathname === '/About' ? 'text-orange':''} hover:text-orange`}>About Us</Link>
                <Link to='/Form' className="py-2 px-7 border-2 border-orange rounded-full uppercase  hover:bg-orange hover:text-white hover:drop-shadow-lg transition ease-in-out duration-500">Consult</Link>
            </div>

            {/* menu icon */}
            <button className="lg:hidden text-3xl" onClick={()=>{setShowNav(showNav ? false:true)}}>
                {
                    showNav ? <RxCross2/>:<RiMenu4Fill/>
                }
            </button>
        </div>

        {/* dropdown menu */}
        <div className={`container mx-auto lg:hidden flex flex-col items-center gap-5 text-xl transition-max-height duration-500 ease-in-out ${showNav ? 'max-h-[16rem]':'max-h-0'} overflow-hidden`}>
            <Link to='/' onClick={()=>{setShowNav(false)}}>Home</Link>
            <Link to='/Service' onClick={()=>{setShowNav(false)}}>Service</Link>
            <Link to='/Projects' onClick={()=>{setShowNav(false)}}>Projects</Link>
            <Link to='/About' onClick={()=>{setShowNav(false)}}>About Us</Link>
            <Link to='/Form' onClick={()=>{setShowNav(false)}} className="py-2 px-7 border-2 border-orange rounded-full uppercase  hover:bg-orange hover:text-white hover:drop-shadow-lg transition ease-in-out duration-500">Consult</Link>
        </div>
    </nav>
  )
}

export default Nav