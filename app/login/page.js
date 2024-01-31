'use client';
import Link from "next/link";
import Input_field from "@/components/input_field/Input_field";
import Button from "@/components/buttons/Button";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useLocalStorage} from "react-use"


export default function Login() {
    
  const [value, setValue, remove] = useLocalStorage('auth', '');


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();


      const onSubmit = async(data) =>  {
        
        try {
            await axios.post('http://localhost:3100/Api/login', {
              data
            }).then((res) => {
              console.log(res.data)
              console.log('Registered Successfully')
              window.location.pathname = '/about';
              setValue(res.data)
      
            }).catch((err) => {
              // console.log(err)
            })
          } catch (err) {
      
          }



      };




    return (
        <>
      
            <div className="cs_login_container">
                <form className='loginCard gap-4 alin' onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-center fs-2">User Login</h3>
                    <div className="mb-3">
                        <input type="text" id="email" placeholder="Enter Email" {...register("Email", { required: true })} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input type="text" id="passord" placeholder="Enter Password" {...register("Password", { required: true })} className="form-control" />
                    </div>
                        

                    <button type="submit" className="btn btn-primary">Login </button>
                    <hr></hr>
                    <p className="ml-4">Don't have an account? <Link href="/signup">Sign Up</Link> here.</p>
                </form>
            </div>
        

        </>
    );
}