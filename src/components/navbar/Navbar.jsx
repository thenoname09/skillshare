
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import NabBtn from "./NabBtn";


const Navbar = () => {

   
    return (
        <div className="flex justify-between items-center  border-b p-4 px-7">
            <div className=" ">
                 <h1 className="font-bold text-2xl text-orange-500">SkillShare</h1>
            </div>

            <div>
              
                <ul className="flex  gap-3 text-center items-center">
                    <li><NavLink href={"/"}>Home</NavLink> </li>
                    <li><NavLink href={"/courses"}>Courses</NavLink> </li>
                    <li><NavLink href={"/profile"}>My Profile</NavLink> </li>
                </ul>
                
            </div>

            <div className="space-x-3">
                {/* <Link className=" text-orange-500" href={"/login"}>Login</Link>
                <Link href={"/register"}>Register</Link> */}
                <NabBtn></NabBtn>
            </div>
            


        </div>
    );
};

export default Navbar;