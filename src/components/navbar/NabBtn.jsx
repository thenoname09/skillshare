"use client"
import { authClient } from "@/lib/auth-client";

import { Avatar, Button } from "@heroui/react";
import Link from "next/link";

const NabBtn = () => {
    const userData= authClient.useSession ()
         const user = userData.data?.user;

    const handleLogOut = async () => {
    await authClient.signOut();
  }
    return (
        <>
              {!user && (
            <ul className="flex items-center   gap-3">
              <li>
                <Link className="   rounded-full" href={"/login"}>Login</Link>
              </li>
              <li>
                <Link className=" " href={"/register"}>Register</Link>
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

              <Button onClick={handleLogOut} size="sm" variant="danger">LogOut</Button>
            </div>
          )}
        </>
    );
};

export default NabBtn;