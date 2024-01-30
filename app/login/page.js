'use client';
import Link from "next/link";
import Input_field from "@/components/input_field/Input_field";
import Button from "@/components/buttons/Button";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
export default function Login () {
    const  loginFunction =()=>{
        alert("this is login function");
    }
    return(
        <>
        <nav><Navbar></Navbar><br></br><br></br><br></br><br></br></nav>
        <div className="cs_login_container">
         <div className='loginCard gap-4 alin'>
               <h3 className="text-center fs-2">User Login</h3>
               <Input_field desing="1" placeholder="Username" type="text"></Input_field>
               <Input_field desing="1" placeholder="Password" type="password"></Input_field>
               <Button txt="Login" desing="1" onClick={loginFunction} ></Button>
               <hr></hr>
               <p className="ml-4">Don't have an account? <Link href="/singup">Sign Up</Link> here.</p>
            </div>
        </div>
          <footer><Footer></Footer></footer>
          
        </>
    );
}