"use client";


import { authClient } from "@/lib/auth-client";
import {
  Button,

  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";






const ProfileUpdatePage = () => {

 const router = useRouter();

 const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    
  

    const {data, error} = await authClient.updateUser({
    image,
    name,
    //  callbackURL: '/profile'


    })
    
    

      if(!error) {
        router.push('/profile')
    }
   
    
  };




    return (
        <Card className="border mx-auto w-125 h-s py-10 mt-15 mb-30">
              <h1 className="text-center text-2xl font-bold pb-5"> Update Your Profile</h1>
        
              <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
                <TextField  name="name" type="text">
                  <Label>Name</Label>
                  <Input placeholder="Update your name" />
                  <FieldError />
                </TextField>
        
                <TextField  name="image" type="text">
                  <Label>Image URL</Label>
                  <Input placeholder="Update Image URL" />
                  <FieldError />
                </TextField>
        

               
        
                <div className="flex flex-col gap-3 mt-4 w-full justify-center">
                  <Button type="submit" className={"w-full"}>
                   
                    Save
                  </Button>

                
                 
                
                </div>
              </Form>
                <Link href={"/profile"} className=" w-96 mx-auto">
                    <Button type="submit" variant="danger-soft" className="w-full ">
                   
                    Cancel
                  </Button>
                </Link>
             
        
            </Card>
    );
};

export default ProfileUpdatePage;