import Link from "next/link";
import NavLink from "./NavLink";


const Navbar = () => {
    return (
        <div className="flex justify-between  p-4">
            <div className=" ">
                 <h1 className="font-bold text-2xl">SkillShare</h1>
            </div>

            <div>
              
                <ul className="flex  gap-3 text-center">
                    <li><NavLink href={"/"}>Home</NavLink> </li>
                    <li><NavLink href={"/courses"}>Courses</NavLink> </li>
                    <li><NavLink href={"/profile"}>My Profile</NavLink> </li>
                </ul>
                
            </div>

            <div>
                <button>Login</button>
                <button>SingUp</button>
            </div>



        </div>
    );
};

export default Navbar;