"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import Link from "next/link";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div>
      <Card className="max-w-120 mx-auto flex flex-col items-center border my-15 py-10 space-y-5 bg-stone-50 ">
        <Avatar className="h-40 w-40 ">
          <Avatar.Image
            alt="user.name"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback className="text-4xl ">{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>

        <div className="text-center">
          <h2 className="text-2xl  font-bold">{user?.name}</h2>
                <p className="text-muted">{user?.email}</p>
        </div>
       

        <Link href="/profile/update" className="w-full mt-8">
          <Button className="w-full bg-orange-500 text-white font-bold rounded-full">
             Update Information
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProfilePage;
