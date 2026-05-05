"use client"
import { authClient } from "@/lib/auth-client";

import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import NavLink from "./NavLink";

const NabBtn = () => {
    const userData= authClient.useSession ()
         const user = userData.data?.user;

    const handleLogOut = async () => {
    await authClient.signOut();
  }
    return (
        <>
              {!user && (
            <ul className="flex items-center    gap-3">
              <li>
                <NavLink className="   rounded-full" href={"/login"}>Login</NavLink>
              </li>
              <li>
                <NavLink className=" " href={"/register"}>Register</NavLink>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleLogOut} size="sm" variant="danger">Log Out</Button>
            </div>
          )}
        </>
    );
};

export default NabBtn;