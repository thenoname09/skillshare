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
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";




export default function  LoginPage() {

     const router = useRouter();
  const [error, setError] = useState("")
  const onSubmit = async (e) => {
    e.preventDefault();

   
    
  const formData = new FormData(e.currentTarget);
  const userdata = Object.fromEntries(formData.entries());

    
    const {data, error} = await authClient.signIn.email({
       
        email: userdata.email ,
        password: userdata.password,
        
       
    })

     if (error) {
      
      setError(error.message || "Login failed. Please try again.");
      return;
    }

      if(!error) {
      //  router.replace("/")
      //   router.refresh()
      
      window.location.href = "/";
       
    }
  };

    const handlGoogleLogIn = async () => {
    await authClient.signIn.social({
        provider: 'google'
    })
  }
     const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Card className="border mx-auto w-70 md:w-125 py-10 mt-10 mb-25">
      <h1 className="text-center text-2xl font-bold pb-1"> Login Your Account</h1>
        <Description>
               {error && (
                <p className="text-red-500 text-sm text-center mb-3 px-6 font-semibold">
                  {error}
                </p>
              )}
            </Description>

      <Form className="flex  w-full px-6 md:w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
      
  

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
        className={"relative"}
          isRequired
          minLength={8}
          name="password"
          type={isShowPassword ? "text" : "password"}
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
          <span className="absolute right-4 top-9 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)} > {isShowPassword ? <FaEye /> : <FaEyeSlash />} </span>
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          
          <FieldError />
        </TextField>

        <div className="flex justify-center pt-4 w-full">
          <Button className="w-full" type="submit">
            
            Login 
          </Button>
         
        </div>
      </Form>
          <p className="text-center text-stone-500 text-sm">Or</p>

            <div className="flex justify-center items-center w-auto md:w-96 mx-auto">
              <Button onClick={handlGoogleLogIn} variant="outline" className=" w-full text-center  items-center"><BsGoogle/> LogIn With Google
            </Button>

            </div>
            
    </Card>
  );
}