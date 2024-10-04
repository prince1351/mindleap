import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="flex item-center justify-between mt-5 py-8 font-medium shadow-2xl bg-white px-5 rounded-3xl">
    <Link to="/"> 
    <h1 className="text-5xl text-red-600 ">Mydownloader</h1>
    </Link>

    <ul className=" sm:flex gap-8 text-2xl transition-all ease-in-out duration-1000 ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="hover:text-red-600 transition-all ease-in-out duration-400 ">Home</p>
        </NavLink>
        <NavLink to="/support" className="flex flex-col items-center gap-1">
          <p className="hover:text-red-600 transition-all ease-in-out duration-400 ">Support Me</p>
          <hr className="w-2/4 border-none h-[1.5px] " />
        </NavLink>
       
      </ul>
    
    
    </div>
  )
}
