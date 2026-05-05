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
import { useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";




export default function  LoginPage() {

     const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

   
    const email = e.target.email.value;
    const password = e.target.password.value;

    
    const {data, error} = await authClient.signIn.email({
       
        email,
        password,
        
       
    })

    console.log(data, error);

      if(!error) {
        router.push('/')
    }
  };

    const handlGoogleLogIn = async () => {
    await authClient.signIn.social({
        provider: 'google'
    })
  }

  return (
    <Card className="border mx-auto w-125 py-10 mt-10 mb-25">
      <h1 className="text-center text-2xl font-bold pb-5"> Login Your Account</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
      
  

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-3 justify-center items-center  pt-4 ">
          <Button className="w-full items-center text-center" type="submit">
            
            Login 
          </Button>
         
        </div>
      </Form>
          <p className="text-center text-stone-500 text-sm">Or</p>

            <div className="flex justify-center items-center w-96 mx-auto">
              <Button onClick={handlGoogleLogIn} variant="outline" className=" w-full text-center  items-center"><BsGoogle/> LogIn With Google
            </Button>

            </div>
            
    </Card>
  );
}