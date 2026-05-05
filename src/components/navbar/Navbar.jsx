
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import NabBtn from "./NabBtn";
import { RiMenu3Line } from "react-icons/ri";


const Navbar = () => {

   
    return (
        <div className="flex justify-between items-center  border-b p-4 px-7">
            <div className=" ">
                 <h1 className="font-bold text-2xl text-orange-500">SkillShare</h1>
            </div>

            <div>
              
                <ul className="  gap-3 text-center hidden md:flex items-center">
                    <li><NavLink href={"/"}>Home</NavLink> </li>
                    <li><NavLink href={"/courses"}>Courses</NavLink> </li>
                    <li><NavLink href={"/profile"}>My Profile</NavLink> </li>
                </ul>
                
            </div>

            <div className="space-x-3 hidden md:block">
               
                <NabBtn></NabBtn>
            </div>

             {/* Mobile Menu */}
        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer text-2xl">
            <RiMenu3Line />
          </summary>

          <div className="absolute right-0 mt-3 w-52 bg-white border rounded-lg shadow-lg p-4 flex flex-col gap-3 z-50">
            <NavLink href="/">Home</NavLink>

            <NavLink href="/courses">
              Courses
            </NavLink>

            <NavLink href="/profile">
              My Profile
            </NavLink>

            <div className="pt-2 border-t">
              <NabBtn />
            </div>
          </div>
        </details>


        </div>
    );
};

export default Navbar;